import {PokemonActions, PokemonActionTypes} from './pokemons.actions';
import {initialPokemonState, PokemonState} from '../app.state';

export function PokemonReducer(state = initialPokemonState, action: PokemonActions): PokemonState {
  switch (action.type) {
    case PokemonActionTypes.GetPokemon: {
      return {
        ...state,
      };
    }
    case PokemonActionTypes.GetPokemonSuccess: {
     return {
       ...state,
       data: action.payload,
       message: 'Data fetch successfully!'
     };
    }
    case PokemonActionTypes.GetPokemonFail: {
      return {
        ...state,
        data: [],
        message: 'Something went wrong!'
      };
    }
    case PokemonActionTypes.UpdatePokemon: {
      return {
        ...state,
      };
    }
    case PokemonActionTypes.UpdatePokemonSuccess: {
      const updatedData = [...state.data];
      for (let i = 0; i < updatedData.length; i++) {
        if (updatedData[i].id === action.payload.id) {
          updatedData[i] = action.payload;
          break;
        }
      }
      return {
        ...state,
        data: updatedData,
        message: 'Data updated successfully!'
      };
    }
    case PokemonActionTypes.UpdatePokemonFail: {
      return {
        ...state,
        data: [],
        message: 'Something went wrong!'
      };
    }
    default:
      return state;
  }
}


