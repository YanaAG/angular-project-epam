import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import * as fromPokemons from '../../@ngrx/pokemons';
import { Store, select } from '@ngrx/store';
import { Pokemon } from '../../models/Pokemon';
import {PokemonState} from '../../@ngrx/app.state';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonsListComponent implements OnInit {
  buttonText = 'TEXT LIST';
  pokemons: Pokemon[] = [];
  constructor(private store: Store<PokemonState>) { }

  ngOnInit(): void {
    this.store.dispatch(new fromPokemons.GetPokemon());
    const pokemons$ = this.store.pipe(select(fromPokemons.allPokemons));
    pokemons$.subscribe(res => {
      this.pokemons = res.data;
    });
  }

  updatePokemonInfo(pokemonInfo): Pokemon {
    const updatedPokemon: Pokemon = {
      id: null,
      name: '',
      damage: null,
      creationDate: null,
      caught: false,
    };
    updatedPokemon.id = Number(pokemonInfo.id);
    updatedPokemon.name = pokemonInfo.name;
    updatedPokemon.damage = Number(pokemonInfo.damage);
    updatedPokemon.creationDate = new Date(pokemonInfo.creationDate);
    updatedPokemon.caught = !pokemonInfo.caught;
    return updatedPokemon;
  }

  printInConsole(button, pokemon): void {
    if (button._elementRef.nativeElement.innerText === 'СATCH') {
      console.log(`Покемон ${pokemon.name} был пойман`);
    } else {
      console.log(`Покемон ${pokemon.name} был отпущен`);
    }
    this.store.dispatch(new fromPokemons.UpdatePokemon(this.updatePokemonInfo(pokemon)));
  }

  changeDisplay(): void {
    if (this.buttonText === 'TEXT LIST') {
      this.buttonText = 'LIST OF CARDS';
    } else {
      this.buttonText = 'TEXT LIST';
    }
  }

  filter(pokemon: Pokemon[]): void {
    this.pokemons = pokemon;
  }
}
