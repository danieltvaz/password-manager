import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {renderHook} from '@testing-library/react-hooks';
import {RootStackParamList} from 'app/types/navigation';
import useSignin from 'app/views/signin/signin.hook';

jest.mock('app/contexts/auth-guardian', () => ({useAuthContext: () => ({login: jest.fn()})}));

const mockAlreadyRegistered = jest.fn();

jest.mock('app/hooks/useAutentication', () =>
  jest.fn(() => ({
    alreadyRegistered: mockAlreadyRegistered,
  })),
);

jest.mock('styled-components/native', () => ({useTheme: jest.fn().mockReturnValue(null)}));

const navigation = {
  navigate: jest.fn(),
} as unknown as NativeStackScreenProps<RootStackParamList, 'Signin'>['navigation'];

describe('useSignin', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('render', () => {
    it('should do nothing if alreadyRegistered', () => {
      mockAlreadyRegistered.mockReturnValue(true);

      renderHook(() => useSignin({navigation}));

      expect(navigation.navigate).not.toBeCalled();
    });

    it('should execute navigate if not alreadyRegistered', () => {
      mockAlreadyRegistered.mockReturnValue(false);

      renderHook(() => useSignin({navigation}));

      expect(navigation.navigate).toBeCalledTimes(1);
    });
  });

  describe('handleOnPressSignup', () => {
    it('should navigate to CreatePassword when triggered', () => {
      const {result} = renderHook(() => useSignin({navigation}));

      jest.clearAllMocks();

      result.current.handleOnPressSignup();

      expect(navigation.navigate).toBeCalledWith('CreatePassword');
    });
  });
});
