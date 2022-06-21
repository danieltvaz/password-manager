import React from 'react';
import {Button, Text} from 'react-native';
import {Logo} from 'app/components/dumb/logo';
import * as Styled from './styles';
import {CreatePasswordProps} from './register-credentials.hook';
import TextInput from 'app/components/dumb/text-input';
import TextWithLink from 'app/components/dumb/text-with-link';
import {
  RootNavigationHook,
  RootNavigationScreenProp,
  RootStackParamList,
} from 'app/types/navigation';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type ProfileScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, 'CreatePassword'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export default function CreatePassword({
  registration,
  state,
  dispatch,
}: CreatePasswordProps) {
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
          onChangeText={value =>
            dispatch({field: 'secretQuestion', payload: value})
          }
        />
        <TextInput
          placeholder="Resposta secreta"
          onChangeText={value =>
            dispatch({field: 'secretAnswer', payload: value})
          }
        />
        <TextInput
          placeholder="Senha"
          onChangeText={value => dispatch({field: 'password', payload: value})}
        />

        <Text>
          {'Já possui uma senha? '}
          <TextWithLink<RootStackParamList> link="Signin" linkText="Login" />
        </Text>

        <Button title="Cadastrar" onPress={() => registration(state)} />
      </Styled.Section>
    </Styled.Wrapper>
  );
}
