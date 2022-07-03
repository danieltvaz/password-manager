import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthContextType} from 'app/contexts/auth-guardian/types';
import {RootStackParamList} from 'app/types/navigation';
import {DefaultTheme} from 'styled-components/native';

export type SigninProps = {
  theme: DefaultTheme;
  alreadyRegistered: () => boolean;
  handleLogin: () => void;
  handlePasswordInput: (value: string) => void;
  inputPassword: string;
} & Pick<AuthContextType, 'login'>;

export type UseSignin = {
  navigation: NativeStackScreenProps<RootStackParamList, 'Signin'>['navigation'];
};
