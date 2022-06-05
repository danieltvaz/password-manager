import {useNavigation} from '@react-navigation/native';
import useAutentication from 'app/hooks/useAutentication';
import {NavigationHook} from 'app/types/navigation';
import {useState} from 'react';
import {ToastAndroid} from 'react-native';
import {useTheme} from 'styled-components/native';
import {SigninProps} from './types';

export default function useSignin(props: SigninProps) {
  const [inputPassword, setInputPassword] = useState('');

  const handlePasswordInput = (value: string) => {
    setInputPassword(value);
  };

  const {navigate, reset} = useNavigation<NavigationHook>();

  const theme = useTheme();

  const handleOnPressSignup = () => navigate('CreatePassword');

  const {alreadyRegistered, verifyPassword} = useAutentication();

  const handleLogin = () => {
    if (verifyPassword(inputPassword)) {
      reset({
        index: 0,
        routes: [{name: 'Dashboard'}],
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
