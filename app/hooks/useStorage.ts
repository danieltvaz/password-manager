import {RegistrationForm} from 'app/components/smart/user-data-form/user-data-form.hook';
import {useEffect} from 'react';
import {MMKV, useMMKVObject} from 'react-native-mmkv';

const storageInstance = new MMKV();

type Scope = 'credentials';

export default function useStorage<T>(scope: Scope) {
  const [storage, setStorage] = useMMKVObject<T>(scope, storageInstance);

  return [storage, setStorage];
}
