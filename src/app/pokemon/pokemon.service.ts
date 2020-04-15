import { Injectable } from '@angular/core';

export interface Pokemon {
  id: number;
  name: string;
  damage: number;
  creationDate: Date;
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
      creationDate: new Date('December 17, 2020'),
    },
    {
      id: 4,
      name: 'Charmander',
      damage: 25,
      creationDate: new Date('December 25, 2020'),
    },
    {
      id: 7,
      name: 'Squirtle',
      damage: 35,
      creationDate: new Date('December 10, 2020'),
    },
    {
      id: 32,
      name: 'Nidoran',
      damage: 45,
      creationDate: new Date('October 5, 2020'),
    },
    {
      id: 39,
      name: 'Jigglypuff',
      damage: 55,
      creationDate: new Date('October 15, 2020'),
    },
    {
      id: 116,
      name: 'Horsea',
      damage: 10,
      creationDate: new Date('October 29, 2020'),
    },
    {
      id: 153,
      name: 'Bayleef',
      damage: 20,
      creationDate: new Date('April 2, 2020'),
    },
    {
      id: 164,
      name: 'Noctowl',
      damage: 30,
      creationDate: new Date('April 21, 2020'),
    },
    {
      id: 172,
      name: 'Pichu',
      damage: 40,
      creationDate: new Date('April 9, 2020'),
    },
    {
      id: 182,
      name: 'Bellossom',
      damage: 50,
      creationDate: new Date('September 1, 2020'),
    },
    {
      id: 261,
      name: 'Poochyena',
      damage: 60,
      creationDate: new Date('September 15, 2020'),
    },
    {
      id: 300,
      name: 'Skitty',
      damage: 70,
      creationDate: new Date('September 28, 2020'),
    }
  ];
  constructor() { }

  getAll(): Pokemon[] {
    return this.pokemons;
  }

  getById(pokemonId: number): Pokemon {
    return this.pokemons.find((p) => p.id === pokemonId);
  }

  filter(pokemonName: string): Pokemon[] {
    return this.pokemons.filter((p) => p.name === pokemonName);
  }

  update(pokemon: Pokemon): void {
    for (let i = 0; i < this.pokemons.length; i++) {
      if (this.pokemons[i].id === pokemon.id) {
        this.pokemons[i] = pokemon;
        break;
      }
    }
  }
}
