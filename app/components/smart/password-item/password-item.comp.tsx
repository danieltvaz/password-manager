import ServiceLogo from 'app/components/dumb/service-logo';
import {PasswordStorage} from 'app/hooks/useVault';
import React from 'react';
import * as Styled from './styles';

export default function PasswordItem({item}: {item: PasswordStorage}) {
  return (
    <Styled.MainWrapper>
      <ServiceLogo serviceName={item.title} />
      <Styled.ServiceInfoWrapper>
        <Styled.ServiceName>{item.title}</Styled.ServiceName>
        <Styled.ServiceLink>{item.site}</Styled.ServiceLink>
      </Styled.ServiceInfoWrapper>
    </Styled.MainWrapper>
  );
}
