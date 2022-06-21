import React from 'react';
import {useTheme} from 'styled-components/native';
import * as Styled from './styles';

export default function EmptyList() {
  const theme = useTheme();
  return (
    <Styled.Wrapper>
      <Styled.Message>
        {'Você ainda não possui nenhum item salvo.'}
      </Styled.Message>
    </Styled.Wrapper>
  );
}
