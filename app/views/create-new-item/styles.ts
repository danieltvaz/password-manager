import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  flex-direction: column;
  height: auto;
  padding: 30px;
  background: ${({theme}) => theme.background.primary};
`;

export const FormTitle = styled.Text`
  font-size: 16px;
  text-align: left;
  color: ${({theme}) => theme.text.active};
  margin-bottom: 5px;
`;

export const InputWrapper = styled.View`
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
`;
