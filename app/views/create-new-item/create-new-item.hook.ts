import {useNavigation} from '@react-navigation/native';
import useVault, {PasswordStorage} from 'app/hooks/useVault';
import {SignedInNavigationHook} from 'app/types/navigation';
import {Dispatch, useReducer} from 'react';
import {ToastAndroid} from 'react-native';

const initialState = {
  id: 1,
  title: '',
  username: '',
  email: '',
  password: '',
  site: '',
  securityQuestion: '',
  securityAnswer: '',
  observations: '',
};

type Action = {
  type: keyof typeof initialState;
  payload: string;
};

export type State = PasswordStorage;

export type NewItemFormProps = {
  handleSubmit: () => void;
  state: State;
  dispatch: Dispatch<Action>;
  navigation: SignedInNavigationHook;
};

export default function useCreateNewItem() {
  function reducer(state: State, action: Action): State {
    return {...state, [action.type]: action.payload};
  }

  const {newPassword} = useVault();

  const navigation = useNavigation<SignedInNavigationHook>();

  const [state, dispatch] = useReducer(reducer, initialState);

  function handleSubmit() {
    newPassword(state);
    navigation.navigate('Vault');
    ToastAndroid.show('Sucesso.', 5000);
  }

  return {state, dispatch, handleSubmit, navigation};
}
