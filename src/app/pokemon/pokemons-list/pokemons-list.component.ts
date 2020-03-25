import { Component, OnInit } from '@angular/core';

export interface Pokemon {
  id: number;
  name: string;
  damage: number;
}

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit {
  pokemons: Pokemon[] = [
    {
      id: 1,
      name: 'Bulbasaur',
      damage: 15,
    },
    {
      id: 4,
      name: 'Charmander',
      damage: 15,
    },
    {
      id: 7,
      name: 'Squirtle',
      damage: 15,
    },
    {
      id: 32,
      name: 'Nidoran',
      damage: 15,
    },
    {
      id: 39,
      name: 'Jigglypuff',
      damage: 15,
    },
    {
      id: 116,
      name: 'Horsea',
      damage: 15,
    },
    {
      id: 153,
      name: 'Bayleef',
      damage: 15,
    },
    {
      id: 164,
      name: 'Noctowl',
      damage: 15,
    },
    {
      id: 172,
      name: 'Pichu',
      damage: 15,
    },
    {
      id: 182,
      name: 'Bellossom',
      damage: 15,
    },
    {
      id: 261,
      name: 'Poochyena',
      damage: 15,
    },
    {
      id: 300,
      name: 'Skitty',
      damage: 15,
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
