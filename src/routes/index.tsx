import React, { useContext } from 'react';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

import { ThemeContext } from 'styled-components';

import Icon from 'react-native-vector-icons/Ionicons';
import { Perfil } from '~/pages';
import HomeStack from './homeStack';
import { rgba } from 'polished';

const Tab = createMaterialBottomTabNavigator();

const MyTabs: React.FC = () => {
  const { secundary, text, highlight } = useContext(ThemeContext);

  return (
    <Tab.Navigator
      activeColor={text}
      inactiveColor={highlight}
      barStyle={{ backgroundColor: secundary }}
      theme={{ colors: { secondaryContainer: rgba(highlight, 0.2) } }}
      >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={20} color={focused ? text : highlight} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ focused }) => (
            <Icon
              name="logo-octocat"
              size={20}
              color={focused ? text : highlight}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
