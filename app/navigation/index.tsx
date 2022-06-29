import React, {useContext} from 'react';
import LoggedIn from './logged-in';
import LoggedOff from './logged-off';

import {AuthContext} from 'app/contexts/auth-guardian';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Routes() {
  const {logged} = useContext(AuthContext);

  return <SafeAreaView style={{flex: 1}}>{logged ? <LoggedIn /> : <LoggedOff />}</SafeAreaView>;
}
