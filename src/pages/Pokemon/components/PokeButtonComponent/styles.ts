import styled, { DefaultTheme, ThemeProps } from 'styled-components/native';

import { rgba } from 'polished';

interface TouchProps extends ThemeProps<DefaultTheme> {
  color?: string;
}
export const Container = styled.TouchableOpacity<TouchProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, color }) => color || theme.highlight};
  border-radius: 20px;
`;

interface TextProps extends ThemeProps<DefaultTheme> {
  textColor?: string;
}
export const ButtonText = styled.Text<TextProps>`
  color: ${({ textColor }) => textColor || '#ffffff'};
  font-weight: bold;
  font-size: 17px;
`;

export const ButtonImage = styled.ImageBackground.attrs({
  imageStyle: {
    resizeMode: 'cover',
    height: 150,
    width: 150,
    top: -38,
    left: '45%',
    transform: [{ rotate: '20deg' }],
    tintColor: rgba(255, 255, 255, 0.4),
  },
})`
  flex: 1;
  padding: 25px 10px;
  overflow: hidden;
  border-radius: 20px;
`;
