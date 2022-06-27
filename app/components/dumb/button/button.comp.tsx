import React from 'react';
import {PressableProps} from 'react-native';
import {useTheme} from 'styled-components/native';
import * as Styled from './styles';

type SButtonProps = {
  title: string;
  buttonRole: 'primary' | 'warning' | 'danger';
};

export default function SButton({title, buttonRole, ...props}: PressableProps & SButtonProps) {
  const theme = useTheme();

  function roleHandler(role: Pick<SButtonProps, 'buttonRole'>['buttonRole']): string {
    return theme.button[role];
  }

  return (
    <Styled.SPressable {...props} accessibilityRole="button" role={roleHandler(buttonRole)}>
      <Styled.SText>{title}</Styled.SText>
    </Styled.SPressable>
  );
}
