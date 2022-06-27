import React from 'react';
import {Logo} from 'app/components/dumb/logo';
import * as Styled from './styles';
import {CreatePasswordProps} from './register-credentials.hook';
import TextInput from 'app/components/dumb/text-input';
import SButton from 'app/components/dumb/button';

export default function CreatePassword({registration, state, dispatch}: CreatePasswordProps) {
  return (
    <Styled.Wrapper>
      <Styled.Section>
        <Logo />
        <TextInput
          placeholder="Nome"
          onChangeText={value => dispatch({field: 'name', payload: value})}
        />
        <TextInput
          placeholder="Pergunta secreta"
          onChangeText={value => dispatch({field: 'secretQuestion', payload: value})}
        />
        <TextInput
          placeholder="Resposta secreta"
          onChangeText={value => dispatch({field: 'secretAnswer', payload: value})}
        />
        <TextInput
          placeholder="Senha"
          onChangeText={value => dispatch({field: 'password', payload: value})}
        />

        <SButton buttonRole="primary" title="Cadastrar" onPress={() => registration(state)} />
      </Styled.Section>
    </Styled.Wrapper>
  );
}
