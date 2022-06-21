import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 48px;
  height: 48px;
  background: ${({theme}) => theme.background.active};
  border-radius: 10px;
`;

export const LogoText = styled.Text`
  font-size: 32px;
  text-align: center;
  color: ${({theme}) => theme.text.inverted};
`;
