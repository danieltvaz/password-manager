import {NavigationProp} from '@react-navigation/native';
import useVault, {PasswordStorage} from 'app/hooks/useVault';
import {LoggedInStackParamList, SignedInNavigationHook} from 'app/types/navigation';

export type PasswordProps = {
  navigation: SignedInNavigationHook;
  passwords: PasswordStorage[];
};

type UsePasswords = {
  navigation: NavigationProp<LoggedInStackParamList, 'Vault'>;
};

export default function usePasswords({navigation}: UsePasswords) {
  const {passwords} = useVault();

  return {navigation, passwords};
}
