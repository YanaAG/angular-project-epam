import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as fromPokemons from '../../@ngrx/pokemons';
import {Pokemon} from '../../models/Pokemon';
import { Store, select } from '@ngrx/store';
import {PokemonState} from '../../@ngrx/app.state';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  pokemon: Pokemon;
  constructor(private route: ActivatedRoute, private store: Store<PokemonState>) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    const pokemon$ = this.store.pipe(select(fromPokemons.PokemonById, { pokemon_id: id }));
    pokemon$.subscribe(res => {
      this.pokemon = res.data;
    });
  }

  updatePokemonInfo(): Pokemon {
    const updatedPokemon: Pokemon = {
      id: null,
      name: '',
      damage: null,
      creationDate: null,
      caught: false,
    };
    updatedPokemon.id = Number(this.pokemon.id);
    updatedPokemon.name = this.pokemon.name;
    updatedPokemon.damage = Number(this.pokemon.damage);
    updatedPokemon.creationDate = new Date(this.pokemon.creationDate);
    updatedPokemon.caught = !this.pokemon.caught;
    return updatedPokemon;
  }
  updateCaught(): void {
    this.store.dispatch(new fromPokemons.UpdatePokemon(this.updatePokemonInfo()));
  }
}
