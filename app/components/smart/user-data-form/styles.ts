import styled from 'styled-components/native';

export const MainWrapper = styled.View`
  flex-direction: column;
  height: auto;
  align-items: center;
  margin: 0 20px;
  background: ${({theme}) => theme.background.primary};
`;

export const FormTitle = styled.Text`
  font-size: 16px;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
`;
