import {useNavigation, useRoute} from '@react-navigation/native';
import useVault, {PasswordStorage} from 'app/hooks/useVault';
import {LoggedInStackParamList, SignedInNavigationHook} from 'app/types/navigation';
import {Dispatch, useReducer, useState} from 'react';
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
  params: LoggedInStackParamList['CreateNewItem'];
  edit: boolean;
  handleEdit: () => void;
};

export default function useCreateNewItem() {
  const {params}: {params?: LoggedInStackParamList['CreateNewItem']} = useRoute();

  const navigation = useNavigation<SignedInNavigationHook>();

  function reducer(state: State, action: Action): State {
    return {...state, [action.type]: action.payload};
  }

  const [state, dispatch] = useReducer(
    reducer,
    params?.role === 'edit' ? params.item! : initialState,
  );

  const [edit, setEdit] = useState(false);

  const {newPassword, editPassword} = useVault();

  function handleSubmit() {
    params?.role === 'edit' && edit ? handleEdit() : handleAdd();
  }

  function handleEdit() {
    if (edit) {
      editPassword({...state});
      navigation.navigate('Vault');
    } else {
      setEdit(true);
    }
  }

  function handleAdd() {
    newPassword(state);
    navigation.navigate('Vault');
    ToastAndroid.show('Sucesso.', 5000);
  }

  return {state, dispatch, handleSubmit, navigation, params, edit, handleEdit};
}
