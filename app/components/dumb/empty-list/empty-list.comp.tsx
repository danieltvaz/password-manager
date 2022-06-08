import React from 'react';
import {Button} from 'react-native';
import * as Styled from './styles';

export default function EmptyList() {
  return (
    <Styled.Wrapper>
      <Styled.Message>{'Lista vazia'}</Styled.Message>
      <Button title="Criar" />
    </Styled.Wrapper>
  );
}
