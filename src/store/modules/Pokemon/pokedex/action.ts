import { PokedexListTypes, PokedexList } from './types';

export function getPokedexList() {
  return {
    type: PokedexListTypes.POKEDEX_REQUEST,
  };
}

export function successPokedexList(data: PokedexList) {
  return {
    type: PokedexListTypes.POKEDEX_SUCCESS,
    payload: {
      data,
    },
  };
}

export function failurePokedexList() {
  return {
    type: PokedexListTypes.POKEDEX_FAILURE,
  };
}
