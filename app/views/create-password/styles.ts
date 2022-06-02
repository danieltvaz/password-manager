import styled from 'styled-components/native';

export const Section = styled.View`
  display: flex;
  align-items: center;
`;

export const TextLink = styled.Text`
  color: ${({theme}) => theme.text.primary};
  font-size: 16px;
`;
