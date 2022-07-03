import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {fireEvent, render} from '@testing-library/react-native';
import {RootStackParamList} from 'app/types/navigation';
import RegisterCredentials from '..';
import React from 'react';
import Navigator from 'app/tests/mock/Navigator';

const mockRegistration = jest.fn();

jest.mock('app/hooks/useAutentication', () =>
  jest.fn(() => ({
    registration: mockRegistration,
  })),
);

const navigation = {
  navigate: jest.fn(),
} as unknown as NativeStackScreenProps<RootStackParamList, 'CreatePassword'>['navigation'];

describe('useRegisterCredentials', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should register successfully if all fields have value', () => {
    const {getByPlaceholderText, getByText} = render(
      <Navigator>
        <RegisterCredentials navigation={navigation} registration={mockRegistration} />
      </Navigator>,
    );

    const nameInput = getByPlaceholderText('Nome');
    const passwordInput = getByPlaceholderText('Senha');
    const secretQuestionInput = getByPlaceholderText('Pergunta secreta');
    const secretAnswerInput = getByPlaceholderText('Resposta secreta');

    const confirmButton = getByText('Cadastrar');

    fireEvent.changeText(nameInput, 'foo name');
    fireEvent.changeText(passwordInput, 'foo password');
    fireEvent.changeText(secretQuestionInput, 'foo question');
    fireEvent.changeText(secretAnswerInput, 'foo answer');

    fireEvent.press(confirmButton);

    expect(mockRegistration).toBeCalledTimes(1);
  });
});
