import React from 'react';
import * as Styled from './styles';

export default function EmptyList() {
  return (
    <Styled.Wrapper>
      <Styled.Message>{'Você ainda não possui nenhum item salvo.'}</Styled.Message>
    </Styled.Wrapper>
  );
}
