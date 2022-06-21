import {useNavigation} from '@react-navigation/native';
import useVault, {PasswordStorage} from 'app/hooks/useVault';
import {SignedInNavigationHook} from 'app/types/navigation';

export type PasswordProps = {
  navigation: SignedInNavigationHook;
  passwords: PasswordStorage[];
};

export default function usePasswords(props: any) {
  const navigation = useNavigation();
  const {passwords} = useVault();

  return {...props, navigation, passwords};
}
