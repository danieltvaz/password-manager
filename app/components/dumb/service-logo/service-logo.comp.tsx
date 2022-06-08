import React from 'react';
import * as Styled from './styles';
import {ServiceLogoProps} from './types';

export default function ServiceLogo({
  serviceName,
  serviceLogoGenerator,
}: ServiceLogoProps) {
  return (
    <Styled.Wrapper>
      <Styled.LogoText>{serviceLogoGenerator(serviceName)}</Styled.LogoText>
    </Styled.Wrapper>
  );
}
