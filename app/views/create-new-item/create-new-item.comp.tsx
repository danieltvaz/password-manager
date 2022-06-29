import React, {useLayoutEffect} from 'react';
import TextInput from 'app/components/dumb/text-input';
import * as Styled from './styles';
import {NewItemFormProps} from './create-new-item.hook';
import SButton from 'app/components/dumb/button';
import {useTheme} from 'styled-components/native';

export default function CreateNewItem({
  state,
  dispatch,
  handleSubmit,
  navigation,
  params,
  edit,
  handleEdit,
}: NewItemFormProps) {
  const theme = useTheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: params?.role === 'edit' ? `${params.item?.title}` : 'Novo item',
      headerStyle: {backgroundColor: edit ? theme.pallet.warning : theme.background.active},
      headerRight: () => (
        <SButton
          title={params?.role === 'edit' && !edit ? 'Editar' : 'Salvar'}
          onPress={params?.role === 'edit' ? handleEdit : handleSubmit}
          buttonRole={edit ? 'warning' : 'primary'}
          style={{marginRight: 10}}
        />
      ),
    });
  }, [state, navigation, handleSubmit]);

  return (
    <Styled.Wrapper>
      <Styled.InputWrapper>
        <Styled.FormTitle>{'Título'}</Styled.FormTitle>
        <TextInput
          onChangeText={value => dispatch({type: 'title', payload: value})}
          value={state.title}
          autoFocus
          editable={params?.role === 'new' || edit ? true : false}
        />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Styled.FormTitle>{'Usuário'}</Styled.FormTitle>
        <TextInput
          onChangeText={value => dispatch({type: 'username', payload: value})}
          value={state.username}
          editable={params?.role === 'new' || edit ? true : false}
        />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Styled.FormTitle>{'E-mail'}</Styled.FormTitle>
        <TextInput
          onChangeText={value => dispatch({type: 'email', payload: value})}
          value={state.email}
          keyboardType="email-address"
          editable={params?.role === 'new' || edit ? true : false}
        />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Styled.FormTitle>{'Senha'}</Styled.FormTitle>
        <TextInput
          onChangeText={value => dispatch({type: 'password', payload: value})}
          value={state.password}
          secureTextEntry
          editable={params?.role === 'new' || edit ? true : false}
        />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Styled.FormTitle>{'Site'}</Styled.FormTitle>
        <TextInput
          onChangeText={value => dispatch({type: 'site', payload: value})}
          value={state.site}
          keyboardType="url"
          editable={params?.role === 'new' || edit ? true : false}
        />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Styled.FormTitle>{'Pergunta de segurança'}</Styled.FormTitle>
        <TextInput
          onChangeText={value => dispatch({type: 'securityQuestion', payload: value})}
          value={state.securityQuestion}
          editable={params?.role === 'new' || edit ? true : false}
        />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Styled.FormTitle>{'Resposta de segurança'}</Styled.FormTitle>
        <TextInput
          onChangeText={value => dispatch({type: 'securityAnswer', payload: value})}
          value={state.securityAnswer}
          editable={params?.role === 'new' || edit ? true : false}
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
