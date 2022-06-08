import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 48px;
  height: 48px;
  background: ${({theme}) => theme.background.secondary};
  border-radius: 10px;
`;

export const LogoText = styled.Text`
  font-size: 32px;
  text-align: center;
`;
