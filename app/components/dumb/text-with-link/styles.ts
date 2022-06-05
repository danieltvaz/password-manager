import styled from 'styled-components/native';

export const StyledText = styled.Text`
  font-size: 16px;
`;

export const StyledTextLink = styled.Text`
  color: ${({theme}) => theme.text.primary};
  font-size: 16px;
`;
