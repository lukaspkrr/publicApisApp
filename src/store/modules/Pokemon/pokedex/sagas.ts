import { takeLatest, call, put, all } from 'redux-saga/effects';

import { AxiosResponse } from 'axios';
import { Api } from '~/services';

import { PokedexList, PokedexListTypes } from './types';

import { successPokedexList, failurePokedexList } from './action';
import { idToText } from '~/utils';

export function* getPokemonList() {
  try {
    console.tron.log('Entrou');
    const pokemonsList: AxiosResponse = yield call(Api.get, '/pokemon');
    console.tron.log('TESTE', pokemonsList);
    let dataToSave: PokedexList = {
      next: pokemonsList.data.next,
      previous: pokemonsList.data.previous,
      pokemons: [],
    };

    const value: AxiosResponse[] = yield all(
      pokemonsList.data?.results.map((e: { url: string }) => {
        let pokeId = e.url.split('pokemon/')[1];
        return call(Api.get, `/pokemon/${pokeId}`);
      }),
    );

    const pokeData = value?.map(element => ({
      id: element.data.id,
      idText: idToText(element.data.id),
      name: element.data.name,
      sprite: element.data.sprites.other['official-artwork'].front_default,
      types: element.data.types.map(
        (el: { type: { name: any } }) => el.type.name,
      ),
    }));

    dataToSave.pokemons = pokeData;

    yield put(successPokedexList(dataToSave));
  } catch (error) {
    yield put(failurePokedexList());
  }
}

export default all([
  takeLatest(PokedexListTypes.POKEDEX_REQUEST, getPokemonList),
]);
