import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { BorderDirective } from '../border.directive';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [HeaderComponent, PokemonCardComponent, PokemonsListComponent, BorderDirective, PokemonSearchComponent],
  exports: [
    PokemonsListComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule
  ]
})
export class PokemonModule { }
