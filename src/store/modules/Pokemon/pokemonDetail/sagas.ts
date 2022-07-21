import { takeLatest, call, put, all, select } from 'redux-saga/effects';

import { AxiosResponse } from 'axios';
import { Api } from '~/services';

import { PokemonDetail, PokemonDetailState, PokemonDetailTypes } from './types';

import { successPokemonDetail, failurePokemonDetail } from './action';
import { PayloadAction } from 'typesafe-actions';
import { navigate } from '~/services/NavigationService';
import { formatEvolutionChain, idToText } from '~/utils';

interface PokemonDetailProps {
  pokemonId: number;
}

type Name = {
  name: string;
};

type Type = {
  type: Name;
};

export type Ability = {
  ability: Name;
  is_hidden: boolean;
};

export function* getPokemonDetail({
  payload,
}: PayloadAction<any, PokemonDetailProps>) {
  const { pokemonId } = payload;
  const { pokemon }: PokemonDetailState = yield select(
    state => state.pokemonDetail,
  );

  let toSaveData: string | PokemonDetail = 'saved';

  try {
    if (pokemonId !== pokemon?.id) {
      const { data: detail }: AxiosResponse = yield call(
        Api.get,
        `/pokemon/${pokemonId}`,
      );

      const { data: specie }: AxiosResponse = yield call(
        Api.get,
        `/pokemon-species/${pokemonId}`,
      );

      let idEvolution = specie.evolution_chain.url.split('evolution-chain/')[1];

      const { data: evolution }: AxiosResponse = yield call(
        Api.get,
        `/evolution-chain/${idEvolution}`,
      );

      let specieType = specie.genera?.find(
        (el: any) => el.language.name === 'en',
      );

      toSaveData = {
        id: detail?.id,
        idText: idToText(detail.id),
        name: detail?.name,
        specie: specieType?.genus?.replace('Pokémon', ''),
        sprite: detail?.sprites.other['official-artwork'].front_default,
        height: detail?.height,
        weight: detail?.weight,
        genderRate: specie?.gender_rate,
        catchRate: specie?.capture_rate,
        hatchCounter: specie.hatch_counter,
        growthRate: specie?.growth_rate?.name,
        description: specie?.flavor_text_entries?.[0]?.flavor_text?.replace(
          /(\r\n|\n|\r|\f)/gm,
          ' ',
        ),
        types: detail.types.map((el: Type) => el?.type?.name),
        eggGroups: specie?.egg_groups?.map((el: Name) => el?.name),
        abilities: detail?.abilities?.map((el: Ability) => ({
          name: el?.ability.name,
          isHidden: el?.is_hidden,
        })),
        // evolutionChain: formatEvolutionChain(evolution),
      };
    }

    yield put(successPokemonDetail(toSaveData));
    navigate('PokemonDetail');
  } catch (error) {
    yield put(failurePokemonDetail());
  }
}

export default all([
  takeLatest(PokemonDetailTypes.POKEMON_DETAIL_REQUEST, getPokemonDetail),
]);
