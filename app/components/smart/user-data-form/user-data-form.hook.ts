import {useNavigation} from '@react-navigation/native';
import useAutentication from 'app/hooks/useAutentication';
import {NavigationHook} from 'app/types/navigation';
import {useReducer} from 'react';
import {useTheme} from 'styled-components/native';
import {UseDataForm, Action} from './types';
import {UserSecurityInfo} from 'app/types/autentication';

export default function useDataForm(props: any): UseDataForm {
  const navigation = useNavigation<NavigationHook>();

  const handleNavigateSignin = () => navigation.navigate('Signin');

  const initialState: UserSecurityInfo = {
    name: '',
    secretQuestion: '',
    secretAnswer: '',
    password: '',
  };

  const reducer = (state: UserSecurityInfo, action: Action) => {
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

  const {registration} = useAutentication();

  return {
    ...props,
    handleNavigateSignin,
    state,
    dispatch,
    theme,
    registration,
  };
}
