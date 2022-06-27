import styled from 'styled-components/native';

export const SPressable = styled.Pressable<{
  role: string;
}>`
  border-radius: 4px;
  width: 100px;
  height: 32px;
  background-color: ${({role}) => role};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme}) => theme.text.inverted};
`;
