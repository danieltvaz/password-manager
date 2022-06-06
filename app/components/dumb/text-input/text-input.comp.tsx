import React from 'react';
import {StyledTextInput} from './styles';
import {TextInputProps} from 'react-native';

type Props = {
  onChangeText: (value: string) => void;
  accessibilityRole?: any;
};

export default function TextInput(props: Props & TextInputProps) {
  return <StyledTextInput {...props} inlineImagePadding={30} />;
}
