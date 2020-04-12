import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Pokemon, PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PokemonService]
})
export class PokemonsListComponent implements OnInit {
  buttonText = 'TEXT LIST';
  pokemons: Pokemon[];
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemons = this.pokemonService.getAll();
  }

  printInConsole(button, pokemonName): void {
    if (button._elementRef.nativeElement.innerText === 'СATCH') {
      button._elementRef.nativeElement.innerText = 'LET GO';
      console.log(`Покемон ${pokemonName} был пойман`);
    } else {
      button._elementRef.nativeElement.innerText = 'СATCH';
      console.log(`Покемон ${pokemonName} был отпущен`);
    }
  }

  changeDisplay(): void {
    if (this.buttonText === 'TEXT LIST') {
      this.buttonText = 'LIST OF CARDS';
    } else {
      this.buttonText = 'TEXT LIST';
    }
  }
}
