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
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';
import { PokemonPopupComponent } from './pokemon-popup/pokemon-popup.component';
import {MatDialogModule} from '@angular/material/dialog';
import {StoreModule} from '@ngrx/store';
import {PokemonReducer} from '../@ngrx/pokemons';
import {EffectsModule} from '@ngrx/effects';
import {PokemonEffects} from '../@ngrx/pokemons/pokemons.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './pokemon.service';


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [PokemonCardComponent, PokemonsListComponent, BorderDirective, PokemonSearchComponent, PokemonEditComponent, PokemonPopupComponent],
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
    MatInputModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    StoreModule.forRoot({pokemons: PokemonReducer}),
    EffectsModule.forRoot([PokemonEffects]),
    StoreDevtoolsModule.instrument({maxAge: 15})
  ],
  providers: [PokemonService],
})
export class PokemonModule { }
