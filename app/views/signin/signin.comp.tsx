import React from 'react';

import * as Styled from './styles';
import {Logo} from 'app/components/dumb/logo';
import TextWithLink from 'app/components/dumb/text-with-link';
import TextInput from 'app/components/dumb/text-input';
import SButton from 'app/components/dumb/button';

import {SigninProps} from './types';

export default function Signin({
  handleLogin,
  handlePasswordInput,
  inputPassword,
  login,
}: SigninProps) {
  return (
    <Styled.StyledMainWrapper>
      <Logo />
      <Styled.StyledSectionWrapper>
        <TextInput
          placeholder="Senha master"
          autoFocus
          onChangeText={handlePasswordInput}
          value={inputPassword}
          onEndEditing={handleLogin}
          secureTextEntry
          style={{textAlign: 'center'}}
        />
      </Styled.StyledSectionWrapper>
      <Styled.StyledSectionWrapper>
        <SButton buttonRole="primary" title="Acessar" onPress={() => login(inputPassword)} />
      </Styled.StyledSectionWrapper>

      <Styled.StyledSectionWrapper>
        <TextWithLink mainText="Esqueceu sua senha?" linkText="Recuperar" link="RecoverPassword" />
      </Styled.StyledSectionWrapper>
    </Styled.StyledMainWrapper>
  );
}
