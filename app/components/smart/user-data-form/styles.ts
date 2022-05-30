import styled from 'styled-components/native';

export const MainWrapper = styled.View`
  flex-direction: column;
  height: auto;
  align-items: center;
  margin: 0 20px;
`;

export const FormTitle = styled.Text`
  font-size: 16px;
`;

export const FormInput = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.text.inactive};
  width: 200px;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
`;

export const Logo = styled.Image`
  width: 250px;
  height: 250px;
`;

export const TextLink = styled.Text`
  color: ${({theme}) => theme.text.primary};
  font-size: 16px;
`;
