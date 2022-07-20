import React from 'react';

import { AnimationContainer, Container, LottieAnimation } from './styles';

import Loading from '~/assets/animations/pokemon/diglett-loading.json';

const LoadingComponent: React.FC = () => {
  return (
    <Container>
      <AnimationContainer>
        <LottieAnimation source={Loading} autoPlay loop />
      </AnimationContainer>
    </Container>
  );
};

export default LoadingComponent;
