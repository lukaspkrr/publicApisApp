/**
 * Action types
 */

export enum PokedexListTypes {
  POKEDEX_REQUEST = '@pokedex/POKEDEX_REQUEST',
  POKEDEX_SUCCESS = '@pokedex/POKEDEX_SUCCESS',
  POKEDEX_FAILURE = '@pokedex/POKEDEX_FAILURE',
}

/**
 * Data Types
 */

export interface Pokemon {
  id: number;
  idText: string | null;
  name: string | null;
  sprite: string | null;
  types: string[];
}

export interface PokedexList {
  next: string | null;
  previous: string | null;
  pokemons: Pokemon[];
}

/**
 * State types
 */

export interface PokedexListState {
  pokedexList: PokedexList;
  loading: boolean;
  error: boolean;
}
