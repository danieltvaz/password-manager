import styled from 'styled-components/native';

export const MainWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme}) => theme.background.primary};
  padding: 0 10px;
`;

export const InputWrapper = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;
