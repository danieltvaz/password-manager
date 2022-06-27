import {AuthContextType} from 'app/contexts/auth-guardian/types';
import {DefaultTheme} from 'styled-components/native';

export type SigninProps = {
  theme: DefaultTheme;
  alreadyRegistered: () => boolean;
  handleLogin: () => void;
  handlePasswordInput: (value: string) => void;
  inputPassword: string;
} & Pick<AuthContextType, 'login'>;
