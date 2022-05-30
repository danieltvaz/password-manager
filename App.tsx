import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Signin from './app/views/signin';
import {ThemeProvider} from 'styled-components';
import theme from './app/theme';
import CreatePassword from './app/views/create-password/create-password.comp';

export type RootStackParamList = {
  Signin: undefined;
  CreatePassword: undefined;
};

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CreatePassword"
            component={CreatePassword}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
