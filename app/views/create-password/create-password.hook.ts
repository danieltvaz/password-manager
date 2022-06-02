import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'App';

export type CreatePasswordProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

export default function useCreatePassword(props: any) {
  const navigation = useNavigation();
  return {...props, navigation};
}
