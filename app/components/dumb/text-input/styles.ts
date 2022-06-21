import styled from 'styled-components/native';

export const StyledTextInput = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.text.inactive};
  min-width: 100%;
  padding: 0;
  color: ${({theme}) => theme.text.primary};
`;
