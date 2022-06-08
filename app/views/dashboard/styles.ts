import styled from 'styled-components/native';

export const Wrapper = styled.View``;

export const SectionHeaderText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  text-align: right;
`;

export const SectionHeaderWrapper = styled.View`
  background: ${({theme}) => theme.background.secondary};
  padding: 0 16px;
`;
