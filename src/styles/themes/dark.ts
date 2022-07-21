import global from './global';
import pokemonTypes from './pokemonTypes';
import { AllThemes } from './types';

const dark: AllThemes = {
  title: 'dark',
  primary: '#1c1c1c',
  secundary: '#282828',
  tertiary: '#2d2d2d',
  highlight: '#6b6b6b',
  text: '#dddddd',

  ...global,
  ...pokemonTypes,
};

export default dark;
