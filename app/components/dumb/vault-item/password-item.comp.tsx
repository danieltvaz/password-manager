import ServiceLogo from 'app/components/dumb/service-logo';
import {PasswordStorage} from 'app/hooks/useVault';
import React from 'react';
import {useTheme} from 'styled-components/native';
import * as Styled from './styles';

export default function PasswordItem({item, ...props}: {item: PasswordStorage}) {
  const theme = useTheme();

  return (
    <Styled.PressableWrapper {...props} android_ripple={{color: theme.background.secondary}}>
      <ServiceLogo serviceName={item.title} />
      <Styled.ServiceInfoWrapper>
        <Styled.ServiceName ellipsizeMode="tail" numberOfLines={1}>
          {item.title}
        </Styled.ServiceName>
        <Styled.ServiceLink ellipsizeMode="tail" numberOfLines={1}>
          {item.site}
        </Styled.ServiceLink>
      </Styled.ServiceInfoWrapper>
    </Styled.PressableWrapper>
  );
}
