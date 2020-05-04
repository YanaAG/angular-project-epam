import { Action } from '@ngrx/store';
import {Pokemon} from '../../models/Pokemon';
import { HttpErrorResponse } from '@angular/common/http';

export enum PokemonActionTypes {
  GetPokemon = '[Pokemon] Get Pokemon',
  GetPokemonSuccess = '[Pokemon] Get Pokemon Success',
  GetPokemonFail = '[Pokemon] Get Pokemon Fail',
  UpdatePokemon = '[Pokemon] Update Pokemon',
  UpdatePokemonSuccess = '[Pokemon] Update Pokemon Success',
  UpdatePokemonFail = '[Pokemon] Update Pokemon Fail',
}

export class GetPokemon implements Action {
  public readonly type = PokemonActionTypes.GetPokemon;
}

export class GetPokemonSuccess implements Action {
  public readonly type = PokemonActionTypes.GetPokemonSuccess;
  constructor(public payload: Pokemon[]) {}
}

export class GetPokemonFail implements Action {
  public readonly type = PokemonActionTypes.GetPokemonFail;
  constructor(public error: HttpErrorResponse) {}
}

export class UpdatePokemon implements Action {
  public readonly type = PokemonActionTypes.UpdatePokemon;
  constructor(public payload: Pokemon) {}
}

export class UpdatePokemonSuccess implements Action {
  public readonly type = PokemonActionTypes.UpdatePokemonSuccess;
  constructor(public payload: Pokemon) {}
}

export class UpdatePokemonFail implements Action {
  public readonly type = PokemonActionTypes.UpdatePokemonFail;
  constructor(public error: HttpErrorResponse) {}
}

export type PokemonActions = GetPokemon | GetPokemonSuccess | GetPokemonFail | UpdatePokemon | UpdatePokemonSuccess | UpdatePokemonFail;



