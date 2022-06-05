import {NavigationHook} from 'app/types/navigation';
import {DefaultTheme} from 'styled-components/native';

export type SigninProps = {
  theme: DefaultTheme;
  alreadyRegistered: () => boolean;
  handleLogin: () => void;
  handlePasswordInput: (value: string) => void;
  inputPassword: string;
  navigate: NavigationHook['navigate'];
};
