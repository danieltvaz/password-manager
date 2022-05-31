import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'App';
import {RegistrationForm} from 'app/components/smart/user-data-form/user-data-form.hook';
import {useEffect} from 'react';
import {ToastAndroid} from 'react-native';
import {MMKV, useMMKVObject} from 'react-native-mmkv';

const autenticationStorage = new MMKV({
  id: 'autentication',
});

type Field = 'name' | 'secretQuestion' | 'secretAnswer' | 'password';

type SetValue = (params: {field: Field; value: string}) => void;

type GetValue = (field: Field) => any;

export default function useAutentication() {
  const [autentication, setAutentication] = useMMKVObject<RegistrationForm>(
    'credentials',
    autenticationStorage,
  );

  const navigation =
    useNavigation<
      NativeStackScreenProps<RootStackParamList, 'CreatePassword'>['navigation']
    >();

  const register = (values: RegistrationForm) => {
    setAutentication(values);
    ToastAndroid.show('Cadastro realizado com sucesso', ToastAndroid.LONG);
    navigation.navigate('Signin');
  };

  useEffect(() => console.log(autentication?.name), [autentication]);

  return {register};
}
