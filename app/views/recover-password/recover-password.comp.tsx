import {Logo} from 'app/components/dumb/logo';
import StyledTextInput from 'app/components/dumb/text-input';
import React from 'react';
import {Text} from 'react-native';
import {InputWrapper, MainWrapper} from './styles';
import {RecoverPasswordProps} from './types';
import SButton from 'app/components/dumb/button';

export default function RecoverPassword({
  secretAnswerInput,
  setSecretAnswerInput,
  autentication,
  handleVerify,
  isCorrectAnswer,
  newPasswordInput,
  setNewPasswordInput,
  saveNewPassword,
}: RecoverPasswordProps) {
  return (
    <MainWrapper>
      <Logo />
      {isCorrectAnswer ? (
        <>
          <InputWrapper>
            <StyledTextInput
              placeholder="Digite sua nova senha"
              onChangeText={newValue => setNewPasswordInput(newValue)}
              value={newPasswordInput}
              secureTextEntry
              onEndEditing={saveNewPassword}
            />
          </InputWrapper>
          <InputWrapper>
            <SButton buttonRole="primary" title="Salvar" onPress={saveNewPassword} />
          </InputWrapper>
        </>
      ) : (
        <>
          <InputWrapper>
            <Text>{`${autentication?.secretQuestion} ?`}</Text>
          </InputWrapper>
          <InputWrapper>
            <StyledTextInput
              value={secretAnswerInput}
              onChangeText={newValue => setSecretAnswerInput(newValue)}
              placeholder={'Digite aqui a resposta'}
              autoFocus
              onEndEditing={handleVerify}
            />
          </InputWrapper>
          <InputWrapper>
            <SButton buttonRole="primary" title="Verificar" onPress={handleVerify} />
          </InputWrapper>
        </>
      )}
    </MainWrapper>
  );
}
