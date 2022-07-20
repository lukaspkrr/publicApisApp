import { rgba } from 'polished';
import { TabBar } from 'react-native-tab-view';
import styled, { DefaultTheme, ThemeProps } from 'styled-components/native';
import pokemonTypes from '~/styles/pokemonTypes';

export const ContainerWraper = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.primary};
`;

interface ContainerProps extends ThemeProps<DefaultTheme> {
  type: string;
}
export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${({ type }) => pokemonTypes[type]};
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const Collumn = styled.View``;

export const PokemonName = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 30px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const TypeContainer = styled.View``;

export const PokemonType = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const PokemonId = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  font-weight: bold;
`;

export const PokemonContainer = styled.View`
  align-items: center;
  height: 150px;
  z-index: 10;
`;

export const PokeballImage = styled.ImageBackground.attrs({
  imageStyle: {
    resizeMode: 'cover',
    height: 290,
    width: 290,
    top: -35,
    left: '13%',
    transform: [{ rotate: '20deg' }],
    tintColor: rgba(255, 255, 255, 0.4),
  },
})`
  overflow: hidden;
  height: 150px;
  width: 100%;
`;

export const PokemonSprite = styled.Image`
  position: absolute;
  width: 220px;
  height: 220px;
  top: -20px;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.secundary};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 30px 0 0 0;
`;

export const RNTabBar = styled(TabBar).attrs(({ theme }) => ({
  indicatorStyle: {
    backgroundColor: theme.text,
  },
  labelStyle: {
    color: theme.text,
    fontSize: 12,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
}))`
  background-color: transparent;
`;
