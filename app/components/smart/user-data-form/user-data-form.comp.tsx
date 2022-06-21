import TextInput from 'app/components/dumb/text-input';
import React from 'react';
import {View, Button} from 'react-native';
import * as Styled from './styles';
import {UseDataForm} from './types';

export default function UserDataForm({
  state,
  dispatch,
  theme,
  registration,
}: UseDataForm) {
  return (
    <Styled.MainWrapper>
      <Styled.InputWrapper>
        <TextInput
          placeholder="Nome"
          autoFocus
          value={state.name}
          onChangeText={value => dispatch({type: 'updateName', payload: value})}
        />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <View>
          <TextInput
            placeholder="Pergunta secreta"
            value={state.secretQuestion}
            onChangeText={value =>
              dispatch({type: 'updateSecretQuestion', payload: value})
            }
          />
          <TextInput
            placeholder="Resposta secreta"
            value={state.secretAnswer}
            onChangeText={value =>
              dispatch({type: 'updateSecretAnswer', payload: value})
            }
            secureTextEntry
          />
        </View>
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <TextInput
          placeholder="Senha"
          value={state.password}
          onChangeText={value =>
            dispatch({type: 'updatePassword', payload: value})
          }
          secureTextEntry
        />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Button
          color={theme.button.primary}
          title="Salvar"
          onPress={() => registration(state)}
        />
      </Styled.InputWrapper>
    </Styled.MainWrapper>
  );
}
