import {MMKV, useMMKVObject} from 'react-native-mmkv';

const storageInstance = new MMKV();

type Scope = 'credentials';

export default function useStorage<T>(
  scope: Scope,
): [T | undefined, (value: T) => void] {
  const [storage, setStorage] = useMMKVObject<T>(scope, storageInstance);

  return [storage, setStorage];
}
