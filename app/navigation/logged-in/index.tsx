import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Passwords from 'app/views/passwords';
import MenuButton from 'app/components/dumb/menu-button';
import CreateNewItem from 'app/views/create-new-item';

export default function NavigatorLoggedIn() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Passwords"
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen
        component={Passwords}
        name="Passwords"
        options={{
          headerTitle: 'Suas senhas',
        }}
      />
      <Tab.Screen
        component={CreateNewItem}
        name="CreateNewItem"
        options={{
          headerTitle: 'Novo item',
        }}
      />
    </Tab.Navigator>
  );
}
