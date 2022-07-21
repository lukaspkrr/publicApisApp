import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Container = styled.View``;

export const Description = styled.Text`
  color: ${({ theme }) => theme.text};
`;

type GenderIconProps = {
  male?: string | number;
};
export const GenderIcon = styled(Icon).attrs({
  size: 20,
})<GenderIconProps>`
  margin-right: 5px;
  color: ${({ name, theme }) =>
    name === 'male' ? theme.genderMale : theme.genderFemale};
  margin-left: ${({ male }) => (male && male > 0 ? '10px' : '0px')};
`;
