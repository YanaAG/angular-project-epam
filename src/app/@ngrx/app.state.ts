import {Pokemon} from '../models/Pokemon';

export interface PokemonState {
  data: Pokemon[];
  message: string;
}

export const initialPokemonState: PokemonState = {
  data: [],
  message: '',
};
