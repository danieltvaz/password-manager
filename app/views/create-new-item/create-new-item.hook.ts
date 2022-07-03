import {NavigationProp, RouteProp, useNavigation, useRoute} from '@react-navigation/native';
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

export default function useCreateNewItem({
  route,
  navigation,
}: {
  route: RouteProp<LoggedInStackParamList, 'CreateNewItem'>;
  navigation: NavigationProp<LoggedInStackParamList>;
}) {
  function reducer(state: State, action: Action): State {
    return {...state, [action.type]: action.payload};
  }

  const [state, dispatch] = useReducer(
    reducer,
    route.params?.role === 'edit' ? route.params.item! : initialState,
  );

  const [edit, setEdit] = useState(false);

  const {newPassword, editPassword} = useVault();

  function handleSubmit() {
    route.params?.role === 'edit' && edit ? handleEdit() : handleAdd();
  }

  function handleEdit() {
    if (edit) {
      editPassword({...state});
      navigation.navigate('Vault');
      ToastAndroid.show('Item salvo.', 5000);
    } else {
      setEdit(true);
    }
  }

  function handleAdd() {
    newPassword(state);
    navigation.navigate('Vault');
    ToastAndroid.show('Item adicionado.', 5000);
  }

  return {
    state,
    dispatch,
    handleSubmit,
    navigation,
    params: route.params,
    edit,
    handleEdit,
  };
}
