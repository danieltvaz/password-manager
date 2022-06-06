import {UserSecurityInfo} from 'app/types/autentication';

export type RecoverPasswordProps = {
  secretAnswerInput: string;
  setSecretAnswerInput: (value: string) => void;
  autentication: UserSecurityInfo;
  isCorrectAnswer: boolean;
  handleVerify: () => void;
  newPasswordInput: string;
  setNewPasswordInput: React.Dispatch<React.SetStateAction<string>>;
  saveNewPassword: () => void;
};
