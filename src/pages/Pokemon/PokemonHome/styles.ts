import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Ionicons';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.primary};
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  margin: 20px 10px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.tertiary};
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px 5px;
`;

export const ButtonContent = styled.View`
  width: 50%;
  padding: 5px;
`;

export const SearchButton = styled.TouchableOpacity``;

export const SearchIcon = styled(Icon).attrs({
  size: 25,
})`
  color: ${({ theme }) => theme.text};
`;

export const SearchInput = styled.TextInput.attrs(({ theme }) => ({
  selectionColor: theme.text,
}))`
  flex: 1;
  font-size: 16px;
  padding: 5px 10px;
  color: ${({ theme }) => theme.text};
`;
