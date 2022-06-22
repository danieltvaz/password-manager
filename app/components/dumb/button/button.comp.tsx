import React from 'react';
import {PressableProps} from 'react-native';
import {DefaultTheme, useTheme} from 'styled-components/native';
import * as Styled from './styles';

type SButtonProps = {
  title: string;
  role: 'primary' | 'warning' | 'danger';
};

export default function SButton({title, role, ...props}: PressableProps & SButtonProps) {
  const theme = useTheme();

  function roleHandler(role: SButtonProps['role']): string {
    return theme.button[role];
  }

  return (
    <Styled.SPressable {...props} accessibilityRole="button" role={roleHandler(role)}>
      <Styled.SText>{title}</Styled.SText>
    </Styled.SPressable>
  );
}
