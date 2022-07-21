import React, { useState } from 'react';
import { useWindowDimensions } from 'react-native';

import { pokemonDetailTypedSelector } from '~/store/modules/Pokemon/pokemonDetail/reducer';

import {
  Container,
  HeaderContainer,
  Collumn,
  PokemonName,
  TypeContainer,
  PokemonType,
  PokemonId,
  PokemonSprite,
  Content,
  PokemonContainer,
  PokeballImage,
  RNTabBar,
  ContainerWraper,
  TypeContent,
} from './styles';

import Pokeball from '~/assets/images/pokemon/pokeball.png';
import { SceneMap, TabView } from 'react-native-tab-view';
import {
  AboutComponent,
  BaseStatsComponent,
  EvolutionComponent,
  MovesComponent,
} from '../components';

const renderScene = SceneMap({
  about: () => <AboutComponent />,
  baseStats: () => <BaseStatsComponent />,
  evolution: () => <EvolutionComponent />,
  moves: () => <MovesComponent />,
});

const PokemonDetail: React.FC = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'about', title: 'About' },
    { key: 'baseStats', title: 'Base Stats' },
    { key: 'evolution', title: 'Evolution' },
    { key: 'moves', title: 'Moves' },
  ]);

  const { pokemon } = pokemonDetailTypedSelector(state => state.pokemonDetail);

  const renderTabBar = (props: any) => <RNTabBar {...props} />;

  return (
    <ContainerWraper>
      <Container type={pokemon?.types?.[0] || ''}>
        <HeaderContainer>
          <Collumn>
            <PokemonName>{pokemon?.name}</PokemonName>
            <TypeContainer>
              {pokemon?.types?.map((type: string, i: number) => (
                <TypeContent>
                  <PokemonType key={String(i)}>{type}</PokemonType>
                </TypeContent>
              ))}
            </TypeContainer>
          </Collumn>
          <Collumn>
            <PokemonId>{pokemon?.idText}</PokemonId>
          </Collumn>
        </HeaderContainer>
        <PokemonContainer>
          <PokeballImage source={Pokeball} />
          <PokemonSprite
            source={{
              uri: pokemon?.sprite,
            }}
          />
        </PokemonContainer>
        <Content>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}
          />
        </Content>
      </Container>
    </ContainerWraper>
  );
};

export default PokemonDetail;
