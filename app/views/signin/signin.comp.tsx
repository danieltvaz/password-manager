import React from 'react';

import {
  StyledTextInput,
  StyledMainWrapper,
  StyledSectionWrapper,
} from './styles';
import {Logo} from 'app/components/dumb/logo';
import {Button} from 'react-native';
import TextWithLink from 'app/components/dumb/text-with-link';

import {SigninProps} from './types';

export default function Signin({
  theme,
  alreadyRegistered,
  handleLogin,
  handlePasswordInput,
  inputPassword,
  navigate,
}: SigninProps) {
  return (
    <StyledMainWrapper>
      <Logo />
      <StyledSectionWrapper>
        <StyledTextInput
          placeholder="Senha master"
          autoFocus
          onChangeText={handlePasswordInput}
          value={inputPassword}
        />
      </StyledSectionWrapper>
      <StyledSectionWrapper>
        <Button
          color={theme.button.primary}
          title="Acessar"
          onPress={handleLogin}
        />
      </StyledSectionWrapper>

      {alreadyRegistered() ? (
        <StyledSectionWrapper>
          <TextWithLink
            mainText="Esqueceu sua senha?"
            linkText="Recuperar"
            link="CreatePassword"
          />
        </StyledSectionWrapper>
      ) : (
        <StyledSectionWrapper>
          <TextWithLink
            mainText="Não tem uma?"
            linkText="Criar"
            link="CreatePassword"
          />
        </StyledSectionWrapper>
      )}
    </StyledMainWrapper>
  );
}
