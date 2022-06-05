import {useNavigation} from '@react-navigation/native';
import {NavigationHook, Routes} from 'app/types/navigation';
import React from 'react';
import {StyledTextLink, StyledText} from './styles';

type Props = {
  mainText: string;
  linkText: string;
  link: Routes;
};

export default function TextWithLink({mainText, linkText, link}: Props) {
  const {navigate} = useNavigation<NavigationHook>();

  return (
    <StyledText>
      {`${mainText} `}
      <StyledTextLink onPress={() => navigate(link)}>{linkText}</StyledTextLink>
    </StyledText>
  );
}
