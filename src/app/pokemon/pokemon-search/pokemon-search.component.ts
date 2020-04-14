import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Pokemon, PokemonService} from '../pokemon.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {
  pokemonName = '';
  @Output() filterPokemons = new EventEmitter<Pokemon[]>();
  constructor(private pokemonService: PokemonService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.queryParams.pokemonName) {
      this.pokemonName = this.activatedRoute.snapshot.queryParams.pokemonName;
      this.findPokemon();
    }
  }
  findPokemon(): void {
    const pokemon = this.pokemonService.filter(this.pokemonName);
    this.addParameter(this.pokemonName);
    this.filter(pokemon);
  }
  clearInput(): void {
    this.pokemonName = '';
    const pokemons = this.pokemonService.getAll();
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
