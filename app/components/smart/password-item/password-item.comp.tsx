import ServiceLogo from 'app/components/dumb/service-logo';
import React from 'react';
import * as Styled from './styles';

export default function PasswordItem({item}) {
  return (
    <Styled.MainWrapper>
      <ServiceLogo serviceName={item.service.name} />
      <Styled.ServiceInfoWrapper>
        <Styled.ServiceName>{item.service.name}</Styled.ServiceName>
        <Styled.ServiceLink>{item.service.website}</Styled.ServiceLink>
      </Styled.ServiceInfoWrapper>
    </Styled.MainWrapper>
  );
}
