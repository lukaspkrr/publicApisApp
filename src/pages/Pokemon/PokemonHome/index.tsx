import React from 'react';
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
            color="#4fc1a6"
            text="Pokedex"
            onPress={onPokedex}
          />
        </ButtonContent>
        <ButtonContent>
          <PokeButtonComponent color="#f7776a" text="Moves" />
        </ButtonContent>
        <ButtonContent>
          <PokeButtonComponent color="#59a9f4" text="Abilities" />
        </ButtonContent>
        <ButtonContent>
          <PokeButtonComponent color="#fdcf49" text="Items" />
        </ButtonContent>
        <ButtonContent>
          <PokeButtonComponent color="#7c528b" text="Locations" />
        </ButtonContent>
      </ButtonContainer>
    </Container>
  );
};

export default PokemonHome;
