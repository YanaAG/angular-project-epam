import { Component, OnInit } from '@angular/core';
import {Pokemon, PokemonService} from '../pokemon.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  pokemon: Pokemon;
  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    const id = this.route.snapshot.params.id;
    this.pokemon = this.pokemonService.getById(Number(id));
  }

}
