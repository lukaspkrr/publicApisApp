import styled, { DefaultTheme, ThemeProps } from 'styled-components/native';

import { darken, rgba } from 'polished';
import pokemonTypes from '~/styles/pokemonTypes';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.primary};
`;

export const Content = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
})``;

export const Card = styled.TouchableOpacity`
  flex: 1;
  margin: 5px;
`;

interface CardProps extends ThemeProps<DefaultTheme> {
  type: string;
}
export const CardBackGround = styled.ImageBackground.attrs({
  imageStyle: {
    resizeMode: 'cover',
    height: 120,
    width: 120,
    top: 25,
    left: '45%',
    transform: [{ rotate: '20deg' }],
    tintColor: rgba(255, 255, 255, 0.4),
  },
})<CardProps>`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 10px;
  background-color: ${({ type }) => pokemonTypes[type]};
  min-height: 120px;
`;

export const CardTextColumn = styled.View`
  justify-content: flex-start;
  padding: 25px 0 0px 5px;
`;

export const CardImageColumn = styled.View`
  justify-content: space-between;
`;

export const PokemonName = styled.Text`
  color: #fff;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: bold;
`;

interface PokemonIdProps extends ThemeProps<DefaultTheme> {
  type: string;
}
export const PokemonId = styled.Text<PokemonIdProps>`
  color: ${({ type }) => darken(0.2, pokemonTypes[type] || '#fff')};
  font-size: 14px;
  font-weight: bold;
  align-self: flex-end;
  padding: 10px 5px 0 0;
`;

export const TypeContainer = styled.View`
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 2px 10px;
  border-radius: 10px;
  margin: 2px 0px;
`;

export const PokemonType = styled.Text`
  color: #fff;
  text-transform: capitalize;
  font-weight: bold;
`;

export const PokemonImage = styled.Image`
  width: 80px;
  height: 80px;
`;
