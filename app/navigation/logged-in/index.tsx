import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Vault from 'app/views/vault';
import CreateNewItem from 'app/views/create-new-item';
import Icon from 'app/components/dumb/bottom-tab-icon';
import {useTheme} from 'styled-components/native';

export default function NavigatorLoggedIn() {
  const Tab = createBottomTabNavigator();
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Passwords"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.background.active,
        },
        headerTitleStyle: {
          fontSize: 16,
        },
        headerTintColor: theme.text.inverted,
        tabBarStyle: {
          justifyContent: 'flex-end',
          backgroundColor: theme.background.secondary,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}>
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
        name="1"
        options={{
          headerTitle: 'Foo',
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({focused}) => <Icon name="heart-outline" active={focused} />,
        }}
      />
      <Tab.Screen
        component={CreateNewItem}
        name="CreateNewItem"
        options={{
          headerTitle: 'Novo item',
          tabBarLabel: '',
          tabBarIcon: ({focused}) => <Icon name="plus" main active={focused} />,
        }}
      />
      <Tab.Screen
        component={CreateNewItem}
        name="4"
        options={{
          headerTitle: 'Novo item',
          tabBarLabel: 'Ajuda',
          tabBarIcon: ({focused}) => <Icon name="help-circle-outline" active={focused} />,
        }}
      />
      <Tab.Screen
        component={CreateNewItem}
        name="5"
        options={{
          headerTitle: 'Novo item',
          tabBarLabel: 'Perfil',
          tabBarIcon: ({focused}) => <Icon name="account-settings-outline" active={focused} />,
        }}
      />
    </Tab.Navigator>
  );
}
