import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { BorderDirective } from '../border.directive';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [PokemonCardComponent, PokemonsListComponent, BorderDirective, PokemonSearchComponent],
  exports: [
    PokemonsListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatInputModule
  ]
})
export class PokemonModule { }
