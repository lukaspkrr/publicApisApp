import React, { ReactNode } from 'react';

import { DescriptionRow } from './styles';

interface DescriptionRowComponentProps {
  children?: ReactNode;
}
const DescriptionRowComponent: React.FC<DescriptionRowComponentProps> = ({
  children,
}) => {
  return <DescriptionRow>{children}</DescriptionRow>;
};

export default DescriptionRowComponent;
