import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { PokemonDetailState, PokemonDetailTypes } from './types';

interface RootState {
  pokemonDetail: PokemonDetailState;
}

export const pokemonDetailTypedSelector: TypedUseSelectorHook<RootState> =
  useSelector;

const INITIAL_STATE: PokemonDetailState = {
  pokemon: null,
  loading: false,
  error: false,
};

export default function pokemonDetail(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case PokemonDetailTypes.POKEMON_DETAIL_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case PokemonDetailTypes.POKEMON_DETAIL_SUCCESS: {
      return {
        ...state,
        loading: false,
        ...(action.payload.data !== 'saved' && {
          pokemon: action.payload.data,
        }),
      };
    }
    case PokemonDetailTypes.POKEMON_DETAIL_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
}
