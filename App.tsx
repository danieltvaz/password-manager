import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Signin from './app/views/signin';
import {ThemeProvider} from 'styled-components';
import theme from './app/theme';
import CreatePassword from './app/views/create-password/create-password.comp';
import Dashboard from 'app/views/dashboard';

export type RootStackParamList = {
  Signin: undefined;
  CreatePassword: undefined;
  Dashboard: undefined;
};

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="CreatePassword" component={CreatePassword} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
