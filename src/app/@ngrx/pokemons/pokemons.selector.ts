import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PokemonState } from '../app.state';

const getPokemonState = createFeatureSelector<PokemonState>('pokemons');

export const allPokemons = createSelector(getPokemonState, (state: PokemonState) => {
  return state;
});

export const PokemonById = createSelector(getPokemonState, (state: PokemonState, props) => {
  const pokemonId = Number(props.pokemon_id);
  const pokemon = state.data.find((p) => p.id === pokemonId);
  return { ...state, data: pokemon };
});

export const PokemonByName = createSelector(getPokemonState, (state: PokemonState, props) => {
  const pokemonName = props.pokemon_name;
  const pokemon = state.data.filter((p) => p.name === pokemonName);
  return { ...state, data: pokemon };
});
