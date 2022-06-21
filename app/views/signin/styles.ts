import styled from 'styled-components/native';

const StyledMainWrapper = styled.View`
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  align-items: center;
  padding: 0 10px;
  background-color: ${({theme}) => theme.background.primary};
`;

const StyledTitle = styled.Text`
  font-size: 24px;
  color: ${({theme}) => theme.text.primary};
`;

const StyledSectionWrapper = styled.View`
  text-align: center;
`;

export {StyledTitle, StyledMainWrapper, StyledSectionWrapper};
