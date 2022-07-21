import global from './global';
import pokemonTypes from './pokemonTypes';
import { AllThemes } from './types';

const light: AllThemes = {
  title: 'light',
  primary: '#f5f5f5',
  secundary: '#ffffff',
  tertiary: '#f0f0f0',
  highlight: '#d3d3d3',
  text: '#282828',

  ...global,
  ...pokemonTypes,
};

export default light;
