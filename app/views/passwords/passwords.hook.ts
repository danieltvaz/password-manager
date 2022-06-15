import {useNavigation} from '@react-navigation/native';
import useVault from 'app/hooks/useVault';
import {SignedInNavigationHook} from 'app/types/navigation';

export type PasswordProps = {
  navigation: SignedInNavigationHook;
};

export default function usePasswords() {
  const navigation = useNavigation();
  const {passwords} = useVault();

  return {navigation, passwords};
}
