import {useAuthContext} from 'app/contexts/auth-guardian';
import useAutentication from 'app/hooks/useAutentication';
import {useEffect, useState} from 'react';
import {useTheme} from 'styled-components/native';
import {UseSignin} from './types';

export default function useSignin({navigation}: UseSignin) {
  const [inputPassword, setInputPassword] = useState('');

  const theme = useTheme();

  const {login} = useAuthContext();

  const {alreadyRegistered} = useAutentication();

  const handleOnPressSignup = () => navigation.navigate('CreatePassword');

  const handlePasswordInput = (value: string) => {
    setInputPassword(value);
  };

  useEffect(() => {
    if (alreadyRegistered()) return;
    navigation.navigate('CreatePassword');
  }, []);

  return {
    handleOnPressSignup,
    theme,
    alreadyRegistered,
    inputPassword,
    handlePasswordInput,
    login,
  };
}
