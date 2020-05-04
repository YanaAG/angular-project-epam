import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PokemonService } from '../../pokemon/pokemon.service';
import { Action } from '@ngrx/store';
import * as fromPokemons from '.';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Pokemon } from '../../models/Pokemon';
import {Observable, of} from 'rxjs';


@Injectable()
export class PokemonEffects {
  constructor(private actions$: Actions, private pokemonService: PokemonService) {
  }

  @Effect()
  getPokemon$: Observable<Action> = this.actions$.pipe(
    ofType(fromPokemons.PokemonActionTypes.GetPokemon),
    mergeMap(() =>
      this.pokemonService.getAll().pipe(
        map((pokemon: Pokemon[]) => {
          return new fromPokemons.GetPokemonSuccess(pokemon);
        }),
        catchError((error) =>
          of(new fromPokemons.GetPokemonFail(error))
        )
      )
    )
  );

  @Effect()
  updatePokemon$: Observable<Action> = this.actions$.pipe(
    ofType(fromPokemons.PokemonActionTypes.UpdatePokemon),
    map((action: fromPokemons.UpdatePokemon) => action.payload),
    mergeMap((pokemon: Pokemon) =>
      this.pokemonService.update(pokemon).pipe(
        map((pokemonNew: Pokemon) => {
          return new fromPokemons.UpdatePokemonSuccess(pokemonNew);
        }),
        catchError((error) =>
          of(new fromPokemons.UpdatePokemonFail(error))
        )
      )
    )
  );
}
