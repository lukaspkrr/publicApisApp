import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ThemeContext } from 'styled-components';

type StackParamList = {
  Home: undefined;
  PokemonStack: undefined;
};
const Stack = createNativeStackNavigator<StackParamList>();

import { Home } from '~/pages';
import PokemonStack from './Pokemon';
import { DarkmodeComponent } from '~/components';

const HomeStack: React.FC = () => {
  const { secundary, text } = useContext(ThemeContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Public APIs',
          headerStyle: {
            backgroundColor: secundary,
          },
          headerTintColor: text,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => <DarkmodeComponent />,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="PokemonStack"
        component={PokemonStack}
        options={{ headerShown: false, presentation: 'fullScreenModal' }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
