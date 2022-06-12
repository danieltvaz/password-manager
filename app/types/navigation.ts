import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Signin: undefined;
  CreatePassword: undefined;
  NavigationLoggedIn: undefined;
  RecoverPassword: undefined;
};

export type RootNavigationScreenProp =
  NativeStackScreenProps<RootStackParamList>;

export type RootNavigationHook = NativeStackNavigationProp<RootStackParamList>;

export type RootRoutes = keyof RootStackParamList;

export type LoggedInStackParamList = {
  Passwords: undefined;
};

export type SignedInNavigationHook =
  NativeStackNavigationProp<LoggedInStackParamList>;

export type LoggedInRoutes = keyof LoggedInStackParamList;
