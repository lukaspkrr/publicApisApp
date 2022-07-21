import React from 'react';
import { DescriptionRowComponent, LabelComponent } from '../';

import { Container } from './styles';

const BaseStatsComponent: React.FC = () => {
  return (
    <Container>
      <DescriptionRowComponent>
        <LabelComponent>Teste</LabelComponent>
      </DescriptionRowComponent>
    </Container>
  );
};

export default BaseStatsComponent;
