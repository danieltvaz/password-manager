import React from 'react';
import {View, Text} from 'react-native';
import UserDataForm from 'app/components/smart/user-data-form';
import {Logo} from 'app/components/dumb/logo';
import {Section, TextLink} from './styles';
import {CreatePasswordProps} from './create-password.hook';

export default function CreatePassword({navigation}: CreatePasswordProps) {
  return (
    <View>
      <Section>
        <Logo />
      </Section>
      <UserDataForm />
      <Section>
        <Text>
          {'Já possui uma senha? '}
          <TextLink onPress={() => navigation.navigate('Signin')}>
            {'Acessar'}
          </TextLink>
        </Text>
      </Section>
    </View>
  );
}
