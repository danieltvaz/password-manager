import {useNavigation} from '@react-navigation/native';
import {
  LoggedInStackParamList,
  NavigateProps,
  SignedInNavigationHook,
} from 'app/types/navigation';
import React from 'react';
import {StyledTextLink, StyledText} from './styles';

type Props = {
  mainText?: string;
  linkText: string;
  link: NavigateProps<LoggedInStackParamList>;
};

export default function TextWithLink({mainText, linkText, link}: Props) {
  const {navigate} = useNavigation<SignedInNavigationHook>();

  return (
    <StyledText>
      {mainText ? `${mainText} ` : null}
      <StyledTextLink onPress={() => navigate(link)}>{linkText}</StyledTextLink>
    </StyledText>
  );
}
