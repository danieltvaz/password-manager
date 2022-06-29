import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import useAutentication from 'app/hooks/useAutentication';
import {UserSecurityInfo} from 'app/types/autentication';
import {RootStackParamList} from 'app/types/navigation';
import React, {useReducer} from 'react';

export type CreatePasswordProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  registration: (formData: UserSecurityInfo) => void;
  state: typeof initialValues;
  dispatch: React.Dispatch<Action>;
};

type Action = {
  field: keyof UserSecurityInfo;
  payload: string;
};

const initialValues: UserSecurityInfo = {
  name: '',
  password: '',
  secretAnswer: '',
  secretQuestion: '',
};

export default function useCreatePassword(props: any) {
  const navigation = useNavigation<CreatePasswordProps['navigation']>();

  function reducer(state: UserSecurityInfo, action: Action) {
    return {...state, [action.field]: action.payload};
  }

  const [state, dispatch] = useReducer(reducer, initialValues);

  const {registration} = useAutentication();
  return {...props, navigation, registration, state, dispatch};
}
