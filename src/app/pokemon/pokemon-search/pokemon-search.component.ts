import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Pokemon, PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {
  pokemonName = '';
  @Output() filterPokemons = new EventEmitter<Pokemon[]>();
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }
  findPokemon(): void {
    const pokemon = this.pokemonService.filter(this.pokemonName);
    this.filter(pokemon);
  }
  clearInput(): void {
    this.pokemonName = '';
    const pokemons = this.pokemonService.getAll();
    this.filter(pokemons);
  }
  filter(pokemon: Pokemon[]): void {
    this.filterPokemons.emit(pokemon);
  }
}
