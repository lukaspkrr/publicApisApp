import React, { ReactNode } from 'react';

import { Label } from './styles';

interface LabelComponentProps {
  children?: ReactNode;
}
const LabelComponent: React.FC<LabelComponentProps> = ({ children }) => {
  return <Label>{children}</Label>;
};

export default LabelComponent;
