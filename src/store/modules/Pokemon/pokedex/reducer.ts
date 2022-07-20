import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { PokedexListState, PokedexListTypes } from './types';

interface RootState {
  pokedex: PokedexListState;
}

export const pokedexTypedSelector: TypedUseSelectorHook<RootState> =
  useSelector;

const INITIAL_STATE: PokedexListState = {
  pokedexList: {
    next: null,
    previous: null,
    pokemons: [],
  },
  loading: false,
  error: false,
};

export default function pokedex(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case PokedexListTypes.POKEDEX_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case PokedexListTypes.POKEDEX_SUCCESS: {
      return {
        ...state,
        loading: false,
        pokedexList: action.payload.data,
      };
    }
    case PokedexListTypes.POKEDEX_FAILURE: {
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
