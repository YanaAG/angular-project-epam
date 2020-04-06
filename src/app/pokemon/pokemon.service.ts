import { Injectable } from '@angular/core';

export interface Pokemon {
  id: number;
  name: string;
  damage: number;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemons: Pokemon[] = [
    {
      id: 1,
      name: 'Bulbasaur',
      damage: 15,
    },
    {
      id: 4,
      name: 'Charmander',
      damage: 25,
    },
    {
      id: 7,
      name: 'Squirtle',
      damage: 35,
    },
    {
      id: 32,
      name: 'Nidoran',
      damage: 45,
    },
    {
      id: 39,
      name: 'Jigglypuff',
      damage: 55,
    },
    {
      id: 116,
      name: 'Horsea',
      damage: 10,
    },
    {
      id: 153,
      name: 'Bayleef',
      damage: 20,
    },
    {
      id: 164,
      name: 'Noctowl',
      damage: 30,
    },
    {
      id: 172,
      name: 'Pichu',
      damage: 40,
    },
    {
      id: 182,
      name: 'Bellossom',
      damage: 50,
    },
    {
      id: 261,
      name: 'Poochyena',
      damage: 60,
    },
    {
      id: 300,
      name: 'Skitty',
      damage: 70,
    }
  ];
  constructor() { }

  getAll(): Pokemon[] {
    return this.pokemons;
  }

  getById(pokemonId: number): Pokemon {
    return this.pokemons.find((p) => p.id === pokemonId);
  }

  filter(pokemonName: string): Pokemon {
    return this.pokemons.filter((p) => p.name === pokemonName)[0];
  }
}
