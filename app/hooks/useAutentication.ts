import {useNavigation} from '@react-navigation/native';
import {UserSecurityInfo} from 'app/types/autentication';
import {RootNavigationHook} from 'app/types/navigation';
import {Alert, ToastAndroid} from 'react-native';
import useStorage from './useStorage';

export default function useAutentication() {
  const [autentication, setAutentication] = useStorage<UserSecurityInfo>('credentials');

  const navigation = useNavigation<RootNavigationHook>();

  const verifyPassword = (userInputPassword: String) =>
    autentication?.password === userInputPassword ? true : false;

  const verifySecretAnswer = (userAnswer: string) =>
    userAnswer.toLowerCase() === autentication?.secretAnswer?.toLocaleLowerCase() ? true : false;

  const alreadyRegistered = () => (autentication?.password ? true : false);

  const registration = (registrationValues: UserSecurityInfo) => {
    const formValuesKeys = Object.keys(registrationValues) as (keyof typeof registrationValues)[];

    const verifyValidForm = formValuesKeys.filter(formFieldKey =>
      registrationValues[formFieldKey] ? true : false,
    );

    if (verifyValidForm.length === formValuesKeys.length) {
      setAutentication(registrationValues);
      ToastAndroid.show('Sucesso.', ToastAndroid.LONG);
      navigation.navigate('Signin');
      return;
    }
    // ToastAndroid.show('Preencha todos campos', ToastAndroid.LONG);
    Alert.alert('Ops!', 'Você deve preencher todos os campos.');
  };

  const setNewPassword = (password: string) => {
    setAutentication({...autentication, password});
    ToastAndroid.show('Senha alterada com sucesso', ToastAndroid.LONG);
  };

  return {
    registration,
    verifyPassword,
    alreadyRegistered,
    verifySecretAnswer,
    autentication,
    setNewPassword,
  };
}
