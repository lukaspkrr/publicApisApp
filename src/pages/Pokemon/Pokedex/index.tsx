import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokedexList } from '~/store/modules/Pokemon/pokedex/action';
import { pokedexTypedSelector } from '~/store/modules/Pokemon/pokedex/reducer';

import {
  Container,
  Content,
  Card,
  CardTextColumn,
  CardImageColumn,
  PokemonImage,
  PokemonName,
  CardBackGround,
  PokemonType,
  TypeContainer,
  PokemonId,
} from './styles';

import Pokeball from '~/assets/images/pokemon/pokeball.png';
import { LoadingComponent } from '~/components';
import { Pokemon } from '~/store/modules/Pokemon/pokedex/types';
import { getPokemonDetail } from '~/store/modules/Pokemon/pokemonDetail/action';
import { pokemonDetailTypedSelector } from '~/store/modules/Pokemon/pokemonDetail/reducer';

interface PokedexProps {}

const Pokedex: React.FC<PokedexProps> = () => {
  const dispatch = useDispatch();

  const { pokedexList, loading } = pokedexTypedSelector(state => state.pokedex);

  const { loading: loadingDetail } = pokemonDetailTypedSelector(
    state => state.pokemonDetail,
  );

  useEffect(() => {
    if (pokedexList.pokemons.length <= 0) {
      dispatch(getPokedexList());
    }
  }, []);

  const selectCard = (item: Pokemon) => {
    dispatch(getPokemonDetail(item.id));
  };

  return (
    <Container>
      {pokedexList.pokemons.length > 0 && (
        <Content
          data={pokedexList.pokemons}
          numColumns={2}
          keyExtractor={(item: any) => String(item?.id)}
          renderItem={({ item }: any) => (
            <Card onPress={() => selectCard(item)}>
              <CardBackGround source={Pokeball} type={item.types?.[0]}>
                <CardTextColumn>
                  <PokemonName>{item.name || ''}</PokemonName>
                  {item?.types.map((type: string, i: number) => (
                    <TypeContainer>
                      <PokemonType key={String(i)}>{type}</PokemonType>
                    </TypeContainer>
                  ))}
                </CardTextColumn>
                <CardImageColumn>
                  <PokemonId type={item.types?.[0]}>{item.idText}</PokemonId>
                  <PokemonImage source={{ uri: item?.sprite }} />
                </CardImageColumn>
              </CardBackGround>
            </Card>
          )}
        />
      )}
      {loading || (loadingDetail && <LoadingComponent />)}
    </Container>
  );
};

export default Pokedex;
