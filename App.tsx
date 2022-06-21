import React from 'react';
import RootNavigation from 'app/navigation/root';
import theme from 'app/theme';
import {ThemeProvider} from 'styled-components/native';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RootNavigation />
    </ThemeProvider>
  );
};

export default App;
