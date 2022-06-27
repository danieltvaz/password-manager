import {useNavigation} from '@react-navigation/native';
import useAutentication from 'app/hooks/useAutentication';
import {RootNavigationHook} from 'app/types/navigation';
import {useState} from 'react';

export default function useRecoverPassword(props: any) {
  const [secretAnswerInput, setSecretAnswerInput] = useState('');
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [newPasswordInput, setNewPasswordInput] = useState('');

  const {autentication, verifySecretAnswer, setNewPassword} = useAutentication();

  const {navigate} = useNavigation<RootNavigationHook>();

  const handleVerify = () => {
    if (verifySecretAnswer(secretAnswerInput)) {
      setIsCorrectAnswer(true);
    }
  };

  const saveNewPassword = () => {
    setNewPassword(newPasswordInput);
    navigate('Signin');
  };

  return {
    ...props,
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
