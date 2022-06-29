import styled from 'styled-components/native';

export const Wrapper = styled.View`
  padding-top: 10px;
  background: ${({theme}) => theme.background.primary};
  height: 100%;
`;

export const SectionHeaderText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  color: ${({theme}) => theme.text.active};
`;

export const SectionHeaderWrapper = styled.View`
  background: ${({theme}) => theme.background.secondary};
  padding: 0 16px;
`;
