import React, {ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import lightTheme from 'app/theme/light';

type Props = {
  children: ReactNode;
};

const MockedNavigator = ({children}: Props) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <NavigationContainer>{children}</NavigationContainer>
    </ThemeProvider>
  );
};

export default MockedNavigator;
