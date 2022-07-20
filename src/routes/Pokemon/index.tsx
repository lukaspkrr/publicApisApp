import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PokemonHome, Pokedex, PokemonDetail } from '~/pages/Pokemon';
import { ThemeContext } from 'styled-components';
import { BackButtonComponent, DarkmodeComponent } from '~/components';

type StackParamList = {
  PokemonHome: undefined;
  Pokedex: undefined;
  PokemonDetail: undefined;
};
const Stack = createNativeStackNavigator<StackParamList>();

const PokemonStack: React.FC = () => {
  const { secundary, text } = useContext(ThemeContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: secundary,
        },
        headerTintColor: text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => <DarkmodeComponent />,
      }}>
      <Stack.Screen
        name="PokemonHome"
        component={PokemonHome}
        options={({ navigation }) => ({
          title: 'Pokémon',
          headerLeft: () => <BackButtonComponent navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="Pokedex"
        component={Pokedex}
        options={({ navigation }) => ({
          title: 'Pokedex',
          headerLeft: () => <BackButtonComponent navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="PokemonDetail"
        component={PokemonDetail}
        options={({ navigation }) => ({
          title: 'Details',
          headerLeft: () => <BackButtonComponent navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default PokemonStack;
