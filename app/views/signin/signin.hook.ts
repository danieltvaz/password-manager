import {useNavigation} from '@react-navigation/native';
import useAutentication from 'app/hooks/useAutentication';
import {RootNavigationHook} from 'app/types/navigation';
import {useState} from 'react';
import {ToastAndroid} from 'react-native';
import {useTheme} from 'styled-components/native';
import {SigninProps} from './types';

export default function useSignin(props: SigninProps) {
  const [inputPassword, setInputPassword] = useState('');

  const handlePasswordInput = (value: string) => {
    setInputPassword(value);
  };

  const {navigate, reset} = useNavigation<RootNavigationHook>();

  const theme = useTheme();

  const handleOnPressSignup = () => navigate('CreatePassword');

  const {alreadyRegistered, verifyPassword} = useAutentication();

  const handleLogin = () => {
    if (verifyPassword(inputPassword)) {
      reset({
        index: 0,
        routes: [{name: 'NavigationLoggedIn'}],
      });
    } else {
      ToastAndroid.show('Senha incorreta.', ToastAndroid.LONG);
    }
  };

  return {
    ...props,
    handleOnPressSignup,
    theme,
    alreadyRegistered,
    handleLogin,
    inputPassword,
    handlePasswordInput,
    navigate,
  };
}
