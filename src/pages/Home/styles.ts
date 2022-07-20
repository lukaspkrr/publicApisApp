import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.primary};
`;

export const ContentContainer = styled.View`
  flex: 1;
`;

export const AppContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  width: 50%;
`;

export const AppTouchable = styled.TouchableOpacity``;

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 20px;
  border: 1px ${({ theme }) => theme.highlight} solid;
`;

export const AppIcon = styled.Image`
  width: 80px;
  height: 80px;
`;

export const AppText = styled.Text`
  text-align: center;
  font-size: 18px;
  margin-top: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

export const ScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 20,
  },
}))``;
