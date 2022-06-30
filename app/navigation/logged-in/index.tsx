import React from 'react';
import {createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';
import Vault from 'app/views/vault';
import CreateNewItem from 'app/views/create-new-item';
import Icon from 'app/components/dumb/bottom-tab-icon';
import {useTheme} from 'styled-components/native';

export default function LoggedIn() {
  const Tab = createBottomTabNavigator();
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Passwords"
      screenOptions={({route}) => ({
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.background.active,
        },
        headerTitleStyle: {
          fontSize: 16,
        },
        headerTintColor: theme.text.inverted,
        tabBarStyle: {
          backgroundColor: theme.background.secondary,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarButton: ['CreateNewItem'].includes(route.name) ? () => null : undefined,
      })}>
      <Tab.Screen
        component={Vault}
        name="Vault"
        options={{
          headerTitle: 'Cofre',
          tabBarLabel: 'Cofre',
          tabBarIcon: ({focused}) => <Icon name="safe" active={focused} />,
        }}
      />

      <Tab.Screen
        component={CreateNewItem}
        name="CreateNewItem"
        options={{
          headerTitle: 'Novo item',
          tabBarLabel: 'Novo item',
          tabBarIcon: ({focused}) => <Icon name="heart-outline" active={focused} />,
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
}
