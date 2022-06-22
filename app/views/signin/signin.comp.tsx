import React from 'react';

import * as Styled from './styles';
import {Logo} from 'app/components/dumb/logo';
import TextWithLink from 'app/components/dumb/text-with-link';
import TextInput from 'app/components/dumb/text-input';
import SButton from 'app/components/dumb/button';

import {SigninProps} from './types';

export default function Signin({
  theme,
  alreadyRegistered,
  handleLogin,
  handlePasswordInput,
  inputPassword,
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
        />
      </Styled.StyledSectionWrapper>
      <Styled.StyledSectionWrapper>
        <SButton role="primary" title="Acessar" onPress={handleLogin} />
      </Styled.StyledSectionWrapper>

      {alreadyRegistered() ? (
        <Styled.StyledSectionWrapper>
          <TextWithLink
            mainText="Esqueceu sua senha?"
            linkText="Recuperar"
            link="RecoverPassword"
          />
        </Styled.StyledSectionWrapper>
      ) : (
        <Styled.StyledSectionWrapper>
          <TextWithLink mainText="Não tem uma?" linkText="Criar" link="CreatePassword" />
        </Styled.StyledSectionWrapper>
      )}
    </Styled.StyledMainWrapper>
  );
}
