import React, { ReactNode } from 'react';

import { Title } from './styles';

interface TitleComponentProps {
  children?: ReactNode;
}
const TitleComponent: React.FC<TitleComponentProps> = ({ children }) => {
  return <Title>{children}</Title>;
};

export default TitleComponent;
