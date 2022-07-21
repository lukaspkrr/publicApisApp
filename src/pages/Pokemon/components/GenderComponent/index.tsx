import React, { useMemo } from 'react';
import { DescriptionRowComponent } from '../';

import { Container, Description, GenderIcon } from './styles';

interface GenderComponentProps {
  genderRate?: number;
}

const GenderComponent: React.FC<GenderComponentProps> = ({ genderRate }) => {
  const female = useMemo(() => {
    if (!genderRate || genderRate === -1) {
      return 0;
    } else {
      return (100 / (8 / genderRate)).toFixed(2);
    }
  }, [genderRate]);

  const male = useMemo(() => {
    if (!genderRate || genderRate === -1) {
      return 0;
    } else {
      return (100 - 100 / (8 / genderRate)).toFixed(2);
    }
  }, [genderRate]);

  return (
    <Container>
      {!genderRate || genderRate === -1 ? (
        <Description>Unknown</Description>
      ) : (
        <DescriptionRowComponent>
          {male > 0 && (
            <>
              <GenderIcon name="male" />
              <Description>{male}%</Description>
            </>
          )}
          {female > 0 && (
            <>
              <GenderIcon name="female" male={male} />
              <Description>{female}%</Description>
            </>
          )}
        </DescriptionRowComponent>
      )}
    </Container>
  );
};

export default GenderComponent;
