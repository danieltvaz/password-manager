import useStorage from './useStorage';

export type PasswordStorage = {
  id: number;
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

  function generateUniqueId(): number {
    if (passwords && passwords.length) {
      return passwords?.map(password => password.id).sort((a, b) => b - a)[0] + 1;
    }
    return 1;
  }

  function newPassword(password: PasswordStorage) {
    setPasswords([...(passwords ? passwords : []), {...password, id: generateUniqueId()}]);
  }

  function editPassword(password: PasswordStorage) {
    const newPassword = passwords?.map(oldPassword =>
      oldPassword.id === password.id ? {...oldPassword, ...password} : oldPassword,
    ) as PasswordStorage[];

    setPasswords(newPassword);
  }

  return {newPassword, editPassword, passwords};
}
