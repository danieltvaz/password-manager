import React from 'react';
import {View, Text, Button} from 'react-native';
import * as Styled from './styles';
import {UseDataForm} from './user-data-form.hook';

export default function UserDataForm({
  handleNavigateSignin,
  state,
  dispatch,
  theme,
}: UseDataForm) {
  return (
    <Styled.MainWrapper>
      <Styled.Logo source={require('app/assets/logo_transparent.png')} />
      <Styled.InputWrapper>
        <Styled.FormInput
          placeholder="Nome"
          inlineImageLeft="person"
          inlineImagePadding={30}
          autoFocus
          value={state.name}
          onChangeText={value => dispatch({type: 'updateName', payload: value})}
        />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <View>
          <Styled.FormInput
            placeholder="Pergunta secreta"
            inlineImageLeft="question"
            inlineImagePadding={30}
            value={state.secretQuestion}
            onChangeText={value =>
              dispatch({type: 'updateSecretQuestion', payload: value})
            }
          />
          <Styled.FormInput
            placeholder="Resposta secreta"
            inlineImageLeft="answer"
            inlineImagePadding={30}
            value={state.secretAnswer}
            onChangeText={value =>
              dispatch({type: 'updateSecretAnswer', payload: value})
            }
          />
        </View>
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Styled.FormInput
          placeholder="Senha"
          inlineImageLeft="lock"
          inlineImagePadding={30}
          value={state.password}
          onChangeText={value =>
            dispatch({type: 'updatePassword', payload: value})
          }
        />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Button color={theme.button.primary} title="Registrar" />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Text>
          {'Já possui uma senha? '}
          <Styled.TextLink onPress={handleNavigateSignin}>
            {'Acessar'}
          </Styled.TextLink>
        </Text>
      </Styled.InputWrapper>
    </Styled.MainWrapper>
  );
}
