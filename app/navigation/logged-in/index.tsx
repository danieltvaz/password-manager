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
          backgroundColor: theme.background.secondary,
          position: 'absolute',
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
      tabBar={props => (
        <BottomTabBar {...props} state={{...props.state, routes: props.state.routes.slice(0, 2)}} />
      )}>
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
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({focused}) => <Icon name="heart-outline" active={focused} />,
        }}
      />
    </Tab.Navigator>
  );
}
