/**
 * Action types
 */

export enum PokemonDetailTypes {
  POKEMON_DETAIL_REQUEST = '@pokemonDetail/POKEMON_DETAIL_REQUEST',
  POKEMON_DETAIL_SUCCESS = '@pokemonDetail/POKEMON_DETAIL_SUCCESS',
  POKEMON_DETAIL_FAILURE = '@pokemonDetail/POKEMON_DETAIL_FAILURE',
}

/**
 * Data Types
 */

export interface PokemonDetail {
  id: number | null;
  idText: string | null;
  name: string | null;
  sprite: string | null;
  types: string[];
}

/**
 * State types
 */

export interface PokemonDetailState {
  pokemon: any;
  loading: boolean;
  error: boolean;
}
