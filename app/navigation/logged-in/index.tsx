import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from 'app/views/dashboard';
import MenuButton from 'app/components/dumb/menu-button';
import {Text, View} from 'react-native';

export default function NavigatorLoggedIn() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: true,
        headerLeft: () => <MenuButton />,
        headerTitleAlign: 'center',
      }}>
      <Drawer.Screen
        component={Dashboard}
        name="Dashboard"
        options={{
          headerTitle: 'Suas senhas',
        }}
      />
      <Drawer.Screen
        component={() => (
          <View>
            <Text>{'oi'}</Text>
          </View>
        )}
        name="teste"
      />
    </Drawer.Navigator>
  );
}
