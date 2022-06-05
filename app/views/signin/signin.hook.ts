import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'App';
import useAutentication from 'app/hooks/useAutentication';
import {useState} from 'react';
import {ToastAndroid} from 'react-native';
import {useTheme} from 'styled-components/native';
import {DefaultTheme} from 'styled-components/native';

export type UseSigninProps = {
  theme: DefaultTheme;
  navigation: NativeStackScreenProps<
    RootStackParamList,
    'Signin'
  >['navigation'];
};

export default function useSignin(props: UseSigninProps) {
  const [inputPassword, setInputPassword] = useState('');

  const handlePasswordInput = (value: string) => {
    setInputPassword(value);
  };

  const {navigate, reset} = useNavigation<UseSigninProps['navigation']>();

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
  };
}
