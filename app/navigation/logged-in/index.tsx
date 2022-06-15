import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Passwords from 'app/views/passwords';
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
        name="Vault"
        options={{
          headerTitle: 'Suas senhas',
          tabBarLabel: 'Cofre',
        }}
      />
      <Tab.Screen
        component={CreateNewItem}
        name="CreateNewItem"
        options={{
          headerTitle: 'Novo item',
          tabBarLabel: 'Novo item',
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
}
