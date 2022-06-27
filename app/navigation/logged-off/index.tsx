import CreatePassword from 'app/views/register-credentials';
import React from 'react';
import RecoverPassword from 'app/views/recover-password';
import Signin from 'app/views/signin';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from 'app/types/navigation';
import {useTheme} from 'styled-components/native';

export default function LoggedOff() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Signin"
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: theme.background.primary},
      }}>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="CreatePassword" component={CreatePassword} />
      <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
    </Stack.Navigator>
  );
}
