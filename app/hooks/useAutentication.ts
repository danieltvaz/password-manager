import {useNavigation} from '@react-navigation/native';
import {RegistrationForm} from 'app/components/smart/user-data-form/user-data-form.hook';
import {Alert, ToastAndroid} from 'react-native';
import useStorage from './useStorage';

export default function useAutentication() {
  const [autentication, setAutentication] = useStorage('credentials');
  const navigation = useNavigation();

  const verifyPassword = (userInputPassword: String) => {
    if (autentication?.password === userInputPassword) {
      console.warn(true);
    }
  };

  const registration = (registrationValues: RegistrationForm) => {
    const formValuesKeys = Object.keys(
      registrationValues,
    ) as (keyof typeof registrationValues)[];

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

  return {registration, verifyPassword};
}
