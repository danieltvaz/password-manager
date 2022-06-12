import {useNavigation} from '@react-navigation/native';
import {SignedInNavigationHook} from 'app/types/navigation';

export type PasswordProps = {
  navigation: SignedInNavigationHook;
};

export default function usePasswords() {
  const navigation = useNavigation();

  return {navigation};
}
