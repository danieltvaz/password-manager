import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {renderHook, act} from '@testing-library/react-hooks';
import {RootStackParamList} from 'app/types/navigation';
import useRecoverPassword from '../recover-password.hook';

jest.mock('app/hooks/useAutentication', () =>
  jest.fn(() => ({
    autentication: {
      name: '',
      password: '',
      secretQuestion: 'questionTest',
      secretAnswer: 'answerTest',
    },
    verifySecretAnswer: () => true,
    setNewPassword: () => {},
  })),
);

const navigation = {
  navigate: jest.fn(),
} as unknown as NativeStackScreenProps<RootStackParamList, 'RecoverPassword'>['navigation'];

describe('useRecoverPassword', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should isCorrectAnswer state be false on first render', () => {
    const {result} = renderHook(() => useRecoverPassword({navigation}));

    expect(result.current.isCorrectAnswer).toBe(false);
  });

  it('should handleVerify set state to true if answer is correct', () => {
    const {result} = renderHook(() => useRecoverPassword({navigation}));

    act(() => {
      result.current.setSecretAnswerInput('answerTest');
      result.current.handleVerify();
    });

    expect(result.current.isCorrectAnswer).toBe(true);
  });

  it('should call navigate when saveNewPassword is executed', () => {
    const {result} = renderHook(() => useRecoverPassword({navigation}));

    act(() => {
      result.current.saveNewPassword();
    });

    expect(navigation.navigate).toBeCalledTimes(1);
  });
});
