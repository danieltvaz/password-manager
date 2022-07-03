import Signin from '../index';
import {render} from '@testing-library/react-native';
import React from 'react';
import MockedNavigator from 'app/tests/mock/Navigator';
import NavigationProp from 'app/tests/mock/NavigationProp';

let mockRegistered = false;

jest.mock('app/hooks/useAutentication', () =>
  jest.fn(() => ({
    alreadyRegistered: () => mockRegistered,
  })),
);

jest.mock('app/contexts/auth-guardian', () => ({useAuthContext: () => ({login: jest.fn()})}));

describe('<Signin/>', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should navigate to register-credentials if not registered yet', () => {
    render(
      <MockedNavigator>
        <Signin navigation={NavigationProp} />
      </MockedNavigator>,
    );

    expect(NavigationProp.navigate).toBeCalledTimes(1);
  });

  it('should not navigate to register-credentials if registered', () => {
    mockRegistered = true;

    const {} = render(
      <MockedNavigator>
        <Signin navigation={NavigationProp} />
      </MockedNavigator>,
    );

    expect(NavigationProp.navigate).not.toBeCalled();
  });

  it('should render textinput for password', () => {
    const {getByPlaceholderText} = render(
      <MockedNavigator>
        <Signin navigation={NavigationProp} />
      </MockedNavigator>,
    );

    const passwordInput = getByPlaceholderText('Senha master');
    expect(passwordInput).toBeTruthy();
  });
});
