import React, {useContext} from 'react';
import LoggedIn from './logged-in';
import LoggedOff from './logged-off';

import {AuthContext} from 'app/contexts/auth-guardian';

export default function Routes() {
  const {logged} = useContext(AuthContext);

  return <>{logged ? <LoggedIn /> : <LoggedOff />}</>;
}
