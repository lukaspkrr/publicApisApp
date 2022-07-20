import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Ionicons';

export const Container = styled.TouchableOpacity`
  padding: 5px 5px 5px 0px;
`;

export const BackIcon = styled(Icon).attrs({
  size: 30,
})`
  color: ${({ theme }) => theme.text};
`;
