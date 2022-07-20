import { PokemonDetailTypes, PokemonDetail } from './types';

export function getPokemonDetail(pokemonId: number) {
  return {
    type: PokemonDetailTypes.POKEMON_DETAIL_REQUEST,
    payload: {
      pokemonId,
    },
  };
}

export function successPokemonDetail(data: PokemonDetail) {
  return {
    type: PokemonDetailTypes.POKEMON_DETAIL_SUCCESS,
    payload: {
      data,
    },
  };
}

export function failurePokemonDetail() {
  return {
    type: PokemonDetailTypes.POKEMON_DETAIL_FAILURE,
  };
}
