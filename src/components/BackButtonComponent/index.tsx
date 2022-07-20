import React from 'react';

import { Container, BackIcon } from './styles';

interface BackButtonProps {
  navigation?: any;
}

const BackButtonComponent: React.FC<BackButtonProps> = ({ navigation }) => {
  const onBack = () => {
    navigation && navigation.goBack();
  };
  return (
    <Container onPress={onBack}>
      <BackIcon name="chevron-back" />
    </Container>
  );
};

export default BackButtonComponent;
