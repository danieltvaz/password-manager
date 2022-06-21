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

  return {newPassword, passwords};
}
