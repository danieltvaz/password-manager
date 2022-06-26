import React, {useEffect} from 'react';
import TextInput from 'app/components/dumb/text-input';
import * as Styled from './styles';
import {NewItemFormProps} from './create-new-item.hook';
import SButton from 'app/components/dumb/button';

export default function CreateNewItem({
  state,
  dispatch,
  handleSubmit,
  navigation,
}: NewItemFormProps) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <SButton
          title="Adicionar"
          onPress={handleSubmit}
          role="primary"
          style={{marginRight: 10}}
        />
      ),
    });
  }, [state]);

  return (
    <Styled.Wrapper>
      <Styled.InputWrapper>
        <Styled.FormTitle>{'Título'}</Styled.FormTitle>
        <TextInput
          onChangeText={value => dispatch({type: 'title', payload: value})}
          value={state.title}
          autoFocus
        />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Styled.FormTitle>{'Usuário'}</Styled.FormTitle>
        <TextInput
          onChangeText={value => dispatch({type: 'username', payload: value})}
          value={state.username}
        />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Styled.FormTitle>{'E-mail'}</Styled.FormTitle>
        <TextInput
          onChangeText={value => dispatch({type: 'email', payload: value})}
          value={state.email}
          keyboardType="email-address"
        />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Styled.FormTitle>{'Senha'}</Styled.FormTitle>
        <TextInput
          onChangeText={value => dispatch({type: 'password', payload: value})}
          value={state.password}
          secureTextEntry
        />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Styled.FormTitle>{'Site'}</Styled.FormTitle>
        <TextInput
          onChangeText={value => dispatch({type: 'site', payload: value})}
          value={state.site}
          keyboardType="url"
        />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Styled.FormTitle>{'Pergunta de segurança'}</Styled.FormTitle>
        <TextInput
          onChangeText={value => dispatch({type: 'securityQuestion', payload: value})}
          value={state.securityQuestion}
        />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Styled.FormTitle>{'Resposta de segurança'}</Styled.FormTitle>
        <TextInput
          onChangeText={value => dispatch({type: 'securityAnswer', payload: value})}
          value={state.securityAnswer}
        />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Styled.FormTitle>{'Observações'}</Styled.FormTitle>
        <TextInput
          onChangeText={value => dispatch({type: 'observations', payload: value})}
          value={state.observations}
        />
      </Styled.InputWrapper>
    </Styled.Wrapper>
  );
}
