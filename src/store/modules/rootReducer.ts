import { combineReducers } from '@reduxjs/toolkit';

import pokedex from './Pokemon/pokedex/reducer';
import pokemonDetail from './Pokemon/pokemonDetail/reducer';

export default combineReducers({
  pokedex,
  pokemonDetail,
});
