import CreatePassword from 'app/views/create-password';
import React from 'react';
import RecoverPassword from 'app/views/recover-password';
import Signin from 'app/views/signin';
import theme from 'app/theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from 'app/types/navigation';
import {ThemeProvider} from 'styled-components/native';
import NavigatorLoggedIn from '../logged-in';

export default function RootNavigation() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Stack.Navigator
          screenOptions={{headerShown: false, headerTitleAlign: 'center'}}>
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="CreatePassword" component={CreatePassword} />
          <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
          <Stack.Screen
            name="NavigationLoggedIn"
            component={NavigatorLoggedIn}
          />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
