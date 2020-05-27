import { Injectable } from '@angular/core';
import {Pokemon} from '../models/Pokemon';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemons: Pokemon[] = [
    {
      id: 1,
      name: 'Bulbasaur',
      damage: 15,
      creationDate: new Date('December 17, 2020'),
      caught: false,
    },
    {
      id: 4,
      name: 'Charmander',
      damage: 25,
      creationDate: new Date('December 25, 2020'),
      caught: false,
    },
    {
      id: 7,
      name: 'Squirtle',
      damage: 35,
      creationDate: new Date('December 10, 2020'),
      caught: false,
    },
    {
      id: 32,
      name: 'Nidoran',
      damage: 45,
      creationDate: new Date('October 5, 2020'),
      caught: false,
    },
    {
      id: 39,
      name: 'Jigglypuff',
      damage: 55,
      creationDate: new Date('October 15, 2020'),
      caught: false,
    },
    {
      id: 116,
      name: 'Horsea',
      damage: 10,
      creationDate: new Date('October 29, 2020'),
      caught: false,
    },
    {
      id: 153,
      name: 'Bayleef',
      damage: 20,
      creationDate: new Date('April 2, 2020'),
      caught: false,
    },
    {
      id: 164,
      name: 'Noctowl',
      damage: 30,
      creationDate: new Date('April 21, 2020'),
      caught: false,
    },
    {
      id: 172,
      name: 'Pichu',
      damage: 40,
      creationDate: new Date('April 9, 2020'),
      caught: false,
    },
    {
      id: 182,
      name: 'Bellossom',
      damage: 50,
      creationDate: new Date('September 1, 2020'),
      caught: false,
    },
    {
      id: 261,
      name: 'Poochyena',
      damage: 60,
      creationDate: new Date('September 15, 2020'),
      caught: false,
    },
    {
      id: 300,
      name: 'Skitty',
      damage: 70,
      creationDate: new Date('September 28, 2020'),
      caught: false,
    }
  ];
  constructor() { }

  getAll(): Observable<Pokemon[]> {
    return of(this.pokemons);
  }

  update(pokemon: Pokemon): Observable<Pokemon> {
    const updatedPokemons = [...this.pokemons];
    for (let i = 0; i < updatedPokemons.length; i++) {
      if (updatedPokemons[i].id === pokemon.id) {
        updatedPokemons[i] = pokemon;
        break;
      }
    }
    this.pokemons = updatedPokemons;
    return of(pokemon);
  }
}
