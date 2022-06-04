import React from 'react';

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
  handleOnPress: () => void;
  theme: Theme;
  alreadyRegistered: () => boolean;
};

export default function Signin({
  theme,
  handleOnPress,
  alreadyRegistered,
}: Props) {
  return (
    <StyledMainWrapper>
      <Logo />
      <StyledSectionWrapper>
        <StyledTextInput placeholder="Senha master" autoFocus />
      </StyledSectionWrapper>
      <StyledSectionWrapper>
        <Button color={theme.button.primary} title="Acessar" />
      </StyledSectionWrapper>

      {alreadyRegistered() ? null : (
        <StyledSectionWrapper>
          <StyledText>
            {'Não tem uma? '}
            <StyledTextLink onPress={handleOnPress}>{'Criar'}</StyledTextLink>
          </StyledText>
        </StyledSectionWrapper>
      )}
    </StyledMainWrapper>
  );
}
