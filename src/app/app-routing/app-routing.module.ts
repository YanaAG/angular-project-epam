import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonsListComponent} from '../pokemon/pokemons-list/pokemons-list.component';
import {PokemonCardComponent} from '../pokemon/pokemon-card/pokemon-card.component';

const routes: Routes = [
  {path: 'pokemons', component: PokemonsListComponent},
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'},
  {path: 'pokemon/:id', component: PokemonCardComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
   RouterModule
  ]
})
export class AppRoutingModule { }
