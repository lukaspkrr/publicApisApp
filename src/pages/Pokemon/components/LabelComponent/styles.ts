import { rgba } from 'polished';
import styled from 'styled-components/native';

export const Label = styled.Text`
  color: ${({ theme }) => rgba(theme.text, 0.5)};
  font-weight: 500;
  width: 100px;
`;
