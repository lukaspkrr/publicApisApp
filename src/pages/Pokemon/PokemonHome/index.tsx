import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { PokeButtonComponent } from '../components';

import {
  Container,
  SearchContainer,
  SearchButton,
  SearchIcon,
  SearchInput,
  ButtonContainer,
  ButtonContent,
} from './styles';

interface PokemonHomeProps {
  navigation: any;
}

const PokemonHome: React.FC<PokemonHomeProps> = ({ navigation }) => {
  const { grass, fire, water, electric, poison } = useContext(ThemeContext);

  const onPokedex = () => {
    navigation.navigate('Pokedex');
  };

  return (
    <Container>
      <SearchContainer>
        <SearchButton>
          <SearchIcon name="search" />
        </SearchButton>
        <SearchInput
          numberOfLines={1}
          placeholder="Search pokemons, items and etc."
        />
        <SearchButton>
          <SearchIcon name="mic-sharp" />
        </SearchButton>
      </SearchContainer>
      <ButtonContainer>
        <ButtonContent>
          <PokeButtonComponent
            color={grass}
            text="Pokedex"
            onPress={onPokedex}
          />
        </ButtonContent>
        <ButtonContent>
          <PokeButtonComponent color={fire} text="Moves" />
        </ButtonContent>
        <ButtonContent>
          <PokeButtonComponent color={water} text="Abilities" />
        </ButtonContent>
        <ButtonContent>
          <PokeButtonComponent color={electric} text="Items" />
        </ButtonContent>
        <ButtonContent>
          <PokeButtonComponent color={poison} text="Locations" />
        </ButtonContent>
      </ButtonContainer>
    </Container>
  );
};

export default PokemonHome;
