import React, { ReactNode } from 'react';

import { Section } from './styles';

interface SectionComponentProps {
  children?: ReactNode;
}
const SectionComponent: React.FC<SectionComponentProps> = ({ children }) => {
  return <Section>{children}</Section>;
};

export default SectionComponent;
