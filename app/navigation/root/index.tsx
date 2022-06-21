import CreatePassword from 'app/views/register-credentials';
import React from 'react';
import RecoverPassword from 'app/views/recover-password';
import Signin from 'app/views/signin';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from 'app/types/navigation';
import NavigatorLoggedIn from '../logged-in';
import {useTheme} from 'styled-components/native';

export default function RootNavigation() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerTitleAlign: 'center',
          contentStyle: {backgroundColor: theme.background.primary},
        }}>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="CreatePassword" component={CreatePassword} />
        <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
        <Stack.Screen name="NavigationLoggedIn" component={NavigatorLoggedIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
