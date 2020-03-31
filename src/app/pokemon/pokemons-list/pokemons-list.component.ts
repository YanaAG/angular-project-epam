import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

export interface Pokemon {
  id: number;
  name: string;
  damage: number;
}

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonsListComponent implements OnInit {
  buttonText = 'TEXT LIST';
  pokemons: Pokemon[] = [
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

  ngOnInit(): void {
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
