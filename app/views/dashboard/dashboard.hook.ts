import {useNavigation} from '@react-navigation/native';
import {SignedInNavigationHook} from 'app/types/navigation';

export type DashboardProps = {
  navigation: SignedInNavigationHook;
};

export default function useDashboard() {
  const navigation = useNavigation();

  return {navigation};
}
