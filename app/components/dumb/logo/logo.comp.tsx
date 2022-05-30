import React from 'react';
import {Image} from 'react-native';

type LogoProps = {
  size?: number;
};

export default function Logo({size = 250}: LogoProps): JSX.Element {
  return (
    <>
      <Image
        source={require('app/assets/logo_transparent.png')}
        style={{width: size, height: size}}
      />
    </>
  );
}
