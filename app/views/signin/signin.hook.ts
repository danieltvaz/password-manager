import {useNavigation} from '@react-navigation/native';
import {AuthContext} from 'app/contexts/auth-guardian';
import useAutentication from 'app/hooks/useAutentication';
import {RootNavigationHook} from 'app/types/navigation';
import {useContext, useEffect, useState} from 'react';
import {useTheme} from 'styled-components/native';
import {SigninProps} from './types';

export default function useSignin(props: SigninProps) {
  const [inputPassword, setInputPassword] = useState('');

  const handlePasswordInput = (value: string) => {
    setInputPassword(value);
  };

  const {navigate} = useNavigation<RootNavigationHook>();

  const theme = useTheme();

  const {login} = useContext(AuthContext);

  const handleOnPressSignup = () => navigate('CreatePassword');

  const {alreadyRegistered} = useAutentication();

  useEffect(() => {
    alreadyRegistered() ? null : navigate('CreatePassword');
  }, [alreadyRegistered, navigate]);

  return {
    ...props,
    handleOnPressSignup,
    theme,
    alreadyRegistered,
    inputPassword,
    handlePasswordInput,
    navigate,
    login,
  };
}
