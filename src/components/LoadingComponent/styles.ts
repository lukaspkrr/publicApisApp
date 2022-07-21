import styled from 'styled-components/native';
import Lottie from 'lottie-react-native';
import { rgba } from 'polished';

export const Container = styled.View`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => rgba(theme.black, 0.1)};
`;

export const AnimationContainer = styled.View`
  background-color: ${({ theme }) => rgba(theme.black, 0.7)};
  border-radius: 20px;
  padding: 20px 0;
`;

export const LottieAnimation = styled(Lottie)`
  width: 120px;
  height: 120px;
`;
