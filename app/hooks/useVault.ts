import {useEffect} from 'react';
import useStorage from './useStorage';

export type PasswordStorage = {
  title: string;
  username: string;
  email: string;
  password: string;
  site: string;
  securityQuestion: string;
  securityAnswer: string;
  observations: string;
};

export default function useVault() {
  const [passwords, setPasswords] = useStorage<PasswordStorage[]>('passwords');

  function newPassword(password: PasswordStorage) {
    setPasswords([...(passwords as PasswordStorage[]), password]);
  }

  useEffect(() => {
    if (!passwords)
      setPasswords([
        {
          title: '',
          username: '',
          email: '',
          password: '',
          site: '',
          securityQuestion: '',
          securityAnswer: '',
          observations: '',
        },
      ]);
  }, []);

  return {newPassword, passwords};
}
