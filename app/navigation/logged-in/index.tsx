import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Passwords from 'app/views/passwords';
import MenuButton from 'app/components/dumb/menu-button';
import {Text, View} from 'react-native';

export default function NavigatorLoggedIn() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Passwords"
      screenOptions={{
        headerShown: true,
        headerLeft: () => <MenuButton />,
        headerTitleAlign: 'center',
      }}>
      <Drawer.Screen
        component={Passwords}
        name="Senhas"
        options={{
          headerTitle: 'Suas senhas',
        }}
      />
    </Drawer.Navigator>
  );
}
