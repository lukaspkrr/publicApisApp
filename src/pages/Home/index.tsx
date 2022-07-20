import React from 'react';

import {
  Container,
  ContentContainer,
  ScrollView,
  AppContainer,
  AppTouchable,
  IconContainer,
  AppIcon,
  AppText,
} from './styles';

import Picachu from '~/assets/images/pokemon/pikachu.png';
import DarthVader from '~/assets/images/starWars/darth-vader.png';
import Stich from '~/assets/images/disney/stich.png';
import Venom from '~/assets/images/marvel/venom.png';

interface HomeProps {
  navigation: any;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const openPokemon = () => {
    navigation.navigate('PokemonStack');
  };

  return (
    <Container>
      <ContentContainer>
        <ScrollView>
          {/* Pokemon Icon */}
          <AppContainer>
            <AppTouchable onPress={openPokemon}>
              <IconContainer>
                <AppIcon source={Picachu} />
              </IconContainer>
              <AppText>Pokémon</AppText>
            </AppTouchable>
          </AppContainer>

          {/* Star Wars Icon */}
          <AppContainer>
            <AppTouchable onPress={() => {}}>
              <IconContainer>
                <AppIcon source={DarthVader} />
              </IconContainer>
              <AppText>Star Wars</AppText>
            </AppTouchable>
          </AppContainer>

          {/* Disney Icon */}
          <AppContainer>
            <AppTouchable onPress={() => {}}>
              <IconContainer>
                <AppIcon source={Stich} />
              </IconContainer>
              <AppText>Disney</AppText>
            </AppTouchable>
          </AppContainer>

          {/* Star Wars Icon */}
          <AppContainer>
            <AppTouchable onPress={() => {}}>
              <IconContainer>
                <AppIcon source={Venom} />
              </IconContainer>
              <AppText>Marvel</AppText>
            </AppTouchable>
          </AppContainer>
        </ScrollView>
      </ContentContainer>
    </Container>
  );
};

export default Home;
