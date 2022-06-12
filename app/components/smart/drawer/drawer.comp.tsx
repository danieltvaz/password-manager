import {createDrawerNavigator} from '@react-navigation/drawer';
import Passwords from 'app/views/passwords';

export default function Drawer() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Passwords" component={Passwords} />
      <Drawer.Screen name="new-item" component={() => <div>oi</div>} />
    </Drawer.Navigator>
  );
}
