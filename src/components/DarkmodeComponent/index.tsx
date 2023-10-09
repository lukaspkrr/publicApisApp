import React, { useContext } from 'react';

import { Container, DarkmodeButton } from './styles';

import Icon from 'react-native-vector-icons/Ionicons';

import { ThemeContext } from 'styled-components';
import { ThemeToggleContext } from '~/styles/themes';

const DarkmodeComponent: React.FC = () => {
  const { toggleTheme } = useContext(ThemeToggleContext);
  const { title, text } = useContext(ThemeContext);

  return (
    <Container>
      <DarkmodeButton onPress={toggleTheme}>
        <Icon
          name={title === 'dark' ? 'moon-outline' : 'sunny-outline'}
          size={25}
          color={text}
        />
      </DarkmodeButton>
    </Container>
  );
};

export default DarkmodeComponent;
