import React from 'react';

import { Container, ButtonText, ButtonImage } from './styles';
import Pokeball from '~/assets/images/pokemon/pokeball.png';

interface PokeButtonProps {
  color?: string;
  text?: string;
  textColor?: string;
  onPress?: () => void;
}

const PokeButtonComponent: React.FC<PokeButtonProps> = ({
  color,
  text,
  textColor,
  onPress,
}) => {
  return (
    <Container color={color} onPress={onPress}>
      <ButtonImage source={Pokeball} resizeMethod="auto">
        <ButtonText textColor={textColor}>{text || ''}</ButtonText>
      </ButtonImage>
    </Container>
  );
};

export default PokeButtonComponent;
