import {Name} from 'app/types/vector-icons';
import React from 'react';
import {ViewProps} from 'react-native';
import {IconProps} from 'react-native-vector-icons/Icon';
import {useTheme} from 'styled-components/native';
import * as Styled from './styles';

export interface BottomTabIconProps extends IconProps {
  main?: boolean;
  active?: boolean;
  name: Name;
}

export interface BottomTabIconWrapperProps extends ViewProps {
  main?: boolean;
}

export default function BottomTabIcon(props: BottomTabIconProps) {
  const theme = useTheme();

  function colorHandler(): string {
    if (props.active) {
      if (props.main) {
        return theme.text.inverted;
      }
      if (!props.main) {
        return theme.button.primary;
      }
    }
    if (!props.active) {
      if (props.main) {
        return theme.text.inverted;
      }
      if (!props.main) {
        return theme.button.inactive;
      }
    }
    return '';
  }

  return (
    <>
      <Styled.ExternalWrapper main={props.main}></Styled.ExternalWrapper>
      <Styled.IconWrapper main={props.main}>
        <Styled.StyledIcon {...props} color={colorHandler()} />
      </Styled.IconWrapper>
    </>
  );
}
// style={
//   props.main
//     ? {
//         shadowColor: theme.background.active,
//         shadowOffset: {
//           width: 0,
//           height: 12,
//         },
//         shadowOpacity: 1,
//         shadowRadius: 16,

//         elevation: 25,
//       }
//     : null
// }
