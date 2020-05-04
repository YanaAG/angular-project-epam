import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Pokemon} from '../../models/Pokemon';
import {select, Store} from '@ngrx/store';
import * as fromPokemons from '../../@ngrx/pokemons';
import {PokemonState} from '../../@ngrx/app.state';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {
  pokemonName = '';
  @Output() filterPokemons = new EventEmitter<Pokemon[]>();
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private store: Store<PokemonState>) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.queryParams.pokemonName) {
      this.pokemonName = this.activatedRoute.snapshot.queryParams.pokemonName;
      this.findPokemon();
    }
  }
  findPokemon(): void {
    let pokemon = [];
    const pokemon$ = this.store.pipe(select(fromPokemons.PokemonByName, { pokemon_name: this.pokemonName }));
    pokemon$.subscribe(res => {
      pokemon = res.data;
    });
    this.addParameter(this.pokemonName);
    this.filter(pokemon);
  }
  clearInput(): void {
    this.pokemonName = '';
    let pokemons = [];
    const pokemons$ = this.store.pipe(select(fromPokemons.allPokemons));
    pokemons$.subscribe(res => {
      pokemons = res.data;
    });
    this.addParameter(null);
    this.filter(pokemons);
  }
  filter(pokemon: Pokemon[]): void {
    this.filterPokemons.emit(pokemon);
  }
  addParameter(param: string): void {
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: {pokemonName: param},
        queryParamsHandling: 'merge'
      }
    );
  }
}
