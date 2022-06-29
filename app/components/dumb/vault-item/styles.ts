import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const PressableWrapper = styled.Pressable`
  max-width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  margin: 8px;
  justify-content: flex-start;
`;

export const ServiceName = styled.Text`
  font-size: 18px;
  font-weight: 900;
  font-family: monospace;
`;

export const ServiceLink = styled.Text`
  font-size: 14px;
`;

export const ServiceInfoWrapper = styled.View`
  padding: 0 10px;
  width: ${Dimensions.get('screen').width - 65}px;
`;
