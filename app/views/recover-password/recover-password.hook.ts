import {NavigationProp} from '@react-navigation/native';
import useAutentication from 'app/hooks/useAutentication';
import {RootStackParamList} from 'app/types/navigation';
import {useState} from 'react';

type UseRecoverPasswordProps = {
  navigation: NavigationProp<RootStackParamList, 'RecoverPassword'>;
};

export default function useRecoverPassword({navigation}: UseRecoverPasswordProps) {
  const [secretAnswerInput, setSecretAnswerInput] = useState('');
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [newPasswordInput, setNewPasswordInput] = useState('');

  const {autentication, verifySecretAnswer, setNewPassword} = useAutentication();

  function handleVerify() {
    if (verifySecretAnswer(secretAnswerInput)) {
      setIsCorrectAnswer(true);
    }
  }

  function saveNewPassword() {
    setNewPassword(newPasswordInput);
    navigation.navigate('Signin');
  }

  return {
    secretAnswerInput,
    setSecretAnswerInput,
    autentication,
    isCorrectAnswer,
    handleVerify,
    newPasswordInput,
    setNewPasswordInput,
    saveNewPassword,
  };
}
