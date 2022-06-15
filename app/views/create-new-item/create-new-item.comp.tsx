import React from 'react';

import TextInput from 'app/components/dumb/text-input';
import * as Styled from './styles';
import {NewItemFormProps} from './create-new-item.hook';
import {Button} from 'react-native';

export default function CreateNewItem({
  state,
  dispatch,
  handleSubmit,
  navigation,
}: NewItemFormProps) {
  navigation.setOptions({
    headerRight: () => <Button title="Salvar" onPress={handleSubmit} />,
  });

  return (
    <Styled.Wrapper>
      <Styled.InputWrapper>
        <Styled.FormTitle>{'Título'}</Styled.FormTitle>
        <TextInput
          onChangeText={value => dispatch?.({type: 'title', payload: value})}
          value={state?.title}
          style={{width: '100%'}}
          autoFocus
        />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Styled.FormTitle>{'Usuário'}</Styled.FormTitle>
        <TextInput
          onChangeText={value => dispatch?.({type: 'username', payload: value})}
          value={state?.username}
          style={{width: '100%'}}
        />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Styled.FormTitle>{'E-mail'}</Styled.FormTitle>
        <TextInput
          onChangeText={value => dispatch?.({type: 'email', payload: value})}
          value={state?.email}
          style={{width: '100%'}}
          keyboardType="email-address"
        />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Styled.FormTitle>{'Senha'}</Styled.FormTitle>
        <TextInput
          onChangeText={value => dispatch?.({type: 'password', payload: value})}
          value={state?.password}
          style={{width: '100%'}}
          secureTextEntry
        />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Styled.FormTitle>{'Site'}</Styled.FormTitle>
        <TextInput
          onChangeText={value => dispatch?.({type: 'site', payload: value})}
          value={state?.site}
          style={{width: '100%'}}
          keyboardType="url"
        />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Styled.FormTitle>{'Pergunta de segurança'}</Styled.FormTitle>
        <TextInput
          onChangeText={value =>
            dispatch?.({type: 'securityQuestion', payload: value})
          }
          value={state?.securityQuestion}
          style={{width: '100%'}}
        />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Styled.FormTitle>{'Resposta de segurança'}</Styled.FormTitle>
        <TextInput
          onChangeText={value =>
            dispatch?.({type: 'securityAnswer', payload: value})
          }
          value={state?.securityAnswer}
          style={{width: '100%'}}
        />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Styled.FormTitle>{'Observações'}</Styled.FormTitle>
        <TextInput
          onChangeText={value =>
            dispatch?.({type: 'observations', payload: value})
          }
          value={state?.observations}
          style={{width: '100%'}}
        />
      </Styled.InputWrapper>
    </Styled.Wrapper>
  );
}
