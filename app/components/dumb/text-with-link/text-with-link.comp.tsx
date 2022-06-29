import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyledTextLink, StyledText} from './styles';

interface Props<ParamsList> {
  mainText?: string;
  linkText: string;
  link: keyof ParamsList;
}

export default function TextWithLink<ParamsList>({mainText, linkText, link}: Props<ParamsList>) {
  const {navigate} = useNavigation();

  return (
    <StyledText>
      {mainText ? `${mainText} ` : null}
      <StyledTextLink onPress={() => navigate(link as any)}>{linkText}</StyledTextLink>
    </StyledText>
  );
}
