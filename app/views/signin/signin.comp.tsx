import React, {ChangeEvent} from 'react';

import {
  StyledTextInput,
  StyledMainWrapper,
  StyledSectionWrapper,
  StyledTextLink,
  StyledText,
} from './styles';

import {Logo} from 'app/components/dumb/logo';
import {Button} from 'react-native';
import {Theme} from 'app/theme';

type Props = {
  handleOnPressSignup: () => void;
  theme: Theme;
  alreadyRegistered: () => boolean;
  handleLogin: () => void;
  handlePasswordInput: (value: string) => void;
  inputPassword: string;
};

export default function Signin({
  theme,
  handleOnPressSignup,
  alreadyRegistered,
  handleLogin,
  handlePasswordInput,
  inputPassword,
}: Props) {
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

      {alreadyRegistered() ? null : (
        <StyledSectionWrapper>
          <StyledText>
            {'Não tem uma? '}
            <StyledTextLink onPress={handleOnPressSignup}>
              {'Criar'}
            </StyledTextLink>
          </StyledText>
        </StyledSectionWrapper>
      )}
    </StyledMainWrapper>
  );
}
