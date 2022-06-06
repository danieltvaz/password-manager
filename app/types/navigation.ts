import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Signin: undefined;
  CreatePassword: undefined;
  Dashboard: undefined;
  RecoverPassword: undefined;
};

export type NavigationScreenProp = NativeStackScreenProps<RootStackParamList>;

export type NavigationHook = NativeStackNavigationProp<RootStackParamList>;

export type Routes = keyof RootStackParamList;
