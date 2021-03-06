import {NativeStackNavigationProp, NativeStackScreenProps} from '@react-navigation/native-stack';
import {PasswordStorage} from 'app/hooks/useVault';

export type RootStackParamList = {
  Signin: undefined;
  CreatePassword: undefined;
  NavigationLoggedIn: undefined;
  RecoverPassword: undefined;
};

export type RootNavigationScreenProp = NativeStackScreenProps<RootStackParamList>;

export type RootNavigationHook = NativeStackNavigationProp<RootStackParamList>;

export type RootRoutes = keyof RootStackParamList;

export type LoggedInStackParamList = {
  Vault: undefined;
  CreateNewItem: {item?: PasswordStorage; role?: 'new' | 'edit'} | undefined;
};

export type SignedInNavigationHook = NativeStackNavigationProp<LoggedInStackParamList>;

export type LoggedInRoutes = keyof LoggedInStackParamList;

export type NavigateProps<T> =
  | {
      key: keyof T;
      params?: undefined;
      merge?: boolean | undefined;
    }
  | {
      name: keyof T;
      key?: string | undefined;
      params: undefined;
      merge?: boolean | undefined;
    };
