import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'App';
import {useTheme} from 'styled-components/native';
import {DefaultTheme} from 'styled-components/native';

export type UseSigninProps = {
  theme: DefaultTheme;
  navigation: NativeStackScreenProps<
    RootStackParamList,
    'Signin'
  >['navigation'];
};

export default function useSignin(props: UseSigninProps) {
  const navigation = useNavigation<UseSigninProps['navigation']>();
  const theme = useTheme();
  const handleOnPress = () => navigation.navigate('CreatePassword');

  return {...props, handleOnPress, theme};
}
