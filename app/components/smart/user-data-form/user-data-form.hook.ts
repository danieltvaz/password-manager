import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'App';
import {useReducer} from 'react';
import {DefaultTheme, useTheme} from 'styled-components/native';

type State = {
  name: string;
  secretQuestion: string;
  secretAnswer: string;
  password: string;
};

type Action = {
  type:
    | 'updateName'
    | 'updateSecretQuestion'
    | 'updateSecretAnswer'
    | 'updatePassword';
  payload: string;
};

export type UseDataForm = {
  props: any;
  navigation: NativeStackNavigationProp<RootStackParamList>;
  handleNavigateSignin: () => void;
  state: State;
  dispatch: (params: Action) => void;
  theme: DefaultTheme;
};

export default function useDataForm(props: any): UseDataForm {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNavigateSignin = () => navigation.navigate('Signin');

  const initialState = {
    name: '',
    secretQuestion: '',
    secretAnswer: '',
    password: '',
  };

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'updateName':
        return {...state, name: action.payload};
      case 'updateSecretQuestion':
        return {...state, secretQuestion: action.payload};
      case 'updateSecretAnswer':
        return {...state, secretAnswer: action.payload};
      case 'updatePassword':
        return {...state, password: action.payload};
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const theme = useTheme();

  return {
    ...props,
    handleNavigateSignin,
    state,
    dispatch,
    theme,
  };
}
