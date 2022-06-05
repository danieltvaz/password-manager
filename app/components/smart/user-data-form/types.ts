import {UserSecurityInfo} from 'app/types/autentication';
import {NavigationHook} from 'app/types/navigation';
import {DefaultTheme} from 'styled-components/native';

export type UseDataForm = {
  props: any;
  navigation: NavigationHook;
  handleNavigateSignin: () => void;
  state: UserSecurityInfo;
  dispatch: (params: Action) => void;
  theme: DefaultTheme;
  registration: (values: UserSecurityInfo) => void;
};

export type Action = {
  type:
    | 'updateName'
    | 'updateSecretQuestion'
    | 'updateSecretAnswer'
    | 'updatePassword';
  payload: string;
};
