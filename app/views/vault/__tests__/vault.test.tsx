import {fireEvent, render, screen, waitFor} from '@testing-library/react-native';
import Vault from '..';
import React from 'react';
import MockedNavigator from 'app/tests/mock/Navigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {LoggedInStackParamList, RootStackParamList} from 'app/types/navigation';

const navigation = {
  navigate: jest.fn(),
  setOptions: jest.fn(),
} as unknown as NativeStackScreenProps<LoggedInStackParamList, 'Vault'>['navigation'];

jest.mock('app/hooks/useVault', () =>
  jest.fn(() => ({
    passwords: [
      {
        id: 1,
        title: 'test',
        username: 'daniel',
        email: 'email@test.com',
        password: 'test',
        site: '',
        securityQuestion: '',
        securityAnswer: '',
        observations: '',
      },
      {
        id: 2,
        title: 'best',
        username: 'daniel',
        email: 'email@best.com',
        password: 'best',
        site: '',
        securityQuestion: '',
        securityAnswer: '',
        observations: '',
      },
    ],
  })),
);

describe('<Vault/>', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render password with test title', async () => {
    render(
      <MockedNavigator>
        <Vault navigation={navigation} />
      </MockedNavigator>,
    );

    const passwordItem = await screen.findByText('test');

    expect(passwordItem).toBeDefined();
  });

  it('should render first letter of title in section title', async () => {
    render(
      <MockedNavigator>
        <Vault navigation={navigation} />
      </MockedNavigator>,
    );

    const sectionTitleT = await screen.findByText(/T/g);
    const sectionTitleB = await screen.findByText(/B/g);

    expect(sectionTitleT).toBeDefined();
    expect(sectionTitleB).toBeDefined();
  });

  it('should redirect to edit screen when an item has been pressed', () => {
    render(
      <MockedNavigator>
        <Vault navigation={navigation} />
      </MockedNavigator>,
    );

    const passwordItem = screen.getByText('test');

    fireEvent.press(passwordItem);

    expect(navigation.navigate).toBeCalledTimes(1);

    // const emailInput = await screen.findByText('email@test.com');

    // expect(emailInput).toBeDefined();
  });
});
