import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const spaceToFillView = Dimensions.get('window').height - 145;

export const Wrapper = styled.View`
  justify-content: space-around;
  align-items: center;
  height: ${spaceToFillView}px;
`;

export const Message = styled.Text`
  font-size: 32px;
  text-align: center;
`;

export const MessageLink = styled.Text`
  font-size: 24px;
  color: blue;
`;
