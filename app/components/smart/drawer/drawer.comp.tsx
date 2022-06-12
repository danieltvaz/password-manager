import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from 'app/views/dashboard';

export default function Drawer() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="dashboard" component={Dashboard} />
      <Drawer.Screen name="new-item" component={() => <div>oi</div>} />
    </Drawer.Navigator>
  );
}
