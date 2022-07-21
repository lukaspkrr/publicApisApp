import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 20,
  },
})`
  flex: 1;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.text};
  flex: 1;
`;
