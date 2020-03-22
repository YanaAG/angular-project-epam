import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';



@NgModule({
  declarations: [HeaderComponent, PokemonCardComponent, PokemonsListComponent],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
