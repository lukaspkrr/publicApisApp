import { all } from 'redux-saga/effects';

import pokedex from './Pokemon/pokedex/sagas';
import pokemonDetail from './Pokemon/pokemonDetail/sagas';

export default function* rootSaga(): Generator {
  return yield all([pokedex, pokemonDetail]);
}
