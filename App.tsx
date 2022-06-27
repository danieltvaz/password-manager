import React from 'react';
import theme from 'app/theme';
import {ThemeProvider} from 'styled-components/native';
import Routes from 'app/navigation/index';
import AuthGuardian from 'app/contexts/auth-guardian';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthGuardian>
          <Routes />
        </AuthGuardian>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
