import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const StyledTitle = styled.Text`
  font-size: 24px;
  color: ${({theme}) => theme.text.primary};
`;

const StyledTextInput = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.text.inactive};
  margin: 0 30px 0 30px;
  width: ${() => Dimensions.get('window').width - 30}px;
`;

const StyledMainWrapper = styled.View`
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  align-items: center;
`;

const StyledSectionWrapper = styled.View`
  text-align: center;
`;

export {StyledTitle, StyledTextInput, StyledMainWrapper, StyledSectionWrapper};
