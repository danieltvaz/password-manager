import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background: ${({theme}) => theme.background.primary};
  flex: 1;
  padding: 10px;
`;

export const Section = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
`;

export const TextLink = styled.Text`
  color: ${({theme}) => theme.text.active};
  font-size: 16px;
`;
