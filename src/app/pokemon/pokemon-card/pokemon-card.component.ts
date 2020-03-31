import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemons-list/pokemons-list.component';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  pokemons: Pokemon[] = [
    {
      id: 1,
      name: 'Bulbasaur',
      damage: 15,
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
