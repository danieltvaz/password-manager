import {ComponentType} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled, {DefaultTheme} from 'styled-components/native';
import {
  BottomTabIconProps,
  BottomTabIconWrapperProps,
} from './bottom-tab-icon.comp';
import {View} from 'react-native';

const ICON_MAIN_STYLES = (theme: DefaultTheme) => `
font-size: 48px;
`;

const ICON_SECONDARY_STYLES = (theme: DefaultTheme) => ``;

const ICON_WRAPPER_MAIN_STYLES = (theme: DefaultTheme) => `
transform: translate(0, -8px);
border-radius: 48px;
width: 48px;
height: 48px;
background: ${theme.background.active};
elevation: 25;
shadow-color: ${theme.shadow.primary};

`;

const ICON_WRAPPER_SECONDARY_STYLES = (theme: DefaultTheme) => ``;

const ICON_EXTERNAL_WRAPPER_MAIN = (theme: DefaultTheme) => `
width: 64px;
height: 64px;
background: ${theme.background.primary}
border-radius:64px;
position:absolute;
top: -25px;
left: 8px;



`;

const ICON_EXTERNAL_WRAPPER_SECONDARY = (theme: DefaultTheme) => ``;

export const StyledIcon = styled<ComponentType<BottomTabIconProps>>(Icon)`
  font-size: 32px;
  ${({main, theme}) =>
    main ? ICON_MAIN_STYLES(theme) : ICON_SECONDARY_STYLES(theme)}
`;

export const IconWrapper = styled<ComponentType<BottomTabIconWrapperProps>>(
  View,
)`
  ${({main, theme}) =>
    main
      ? ICON_WRAPPER_MAIN_STYLES(theme)
      : ICON_WRAPPER_SECONDARY_STYLES(theme)}
`;

export const ExternalWrapper = styled<ComponentType<BottomTabIconWrapperProps>>(
  View,
)`
  ${({main, theme}) =>
    main
      ? ICON_EXTERNAL_WRAPPER_MAIN(theme)
      : ICON_EXTERNAL_WRAPPER_SECONDARY(theme)}
`;
