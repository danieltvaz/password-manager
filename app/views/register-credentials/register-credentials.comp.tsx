import React from 'react';
import {Text} from 'react-native';
import {Logo} from 'app/components/dumb/logo';
import * as Styled from './styles';
import {CreatePasswordProps} from './register-credentials.hook';
import TextInput from 'app/components/dumb/text-input';
import TextWithLink from 'app/components/dumb/text-with-link';
import {RootStackParamList} from 'app/types/navigation';
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

        <SButton role="primary" title="Cadastrar" onPress={() => registration(state)} />
      </Styled.Section>
    </Styled.Wrapper>
  );
}
