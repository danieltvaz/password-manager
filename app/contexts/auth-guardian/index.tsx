import React, {createContext, ReactNode, useContext, useEffect, useRef, useState} from 'react';
import useAutentication from 'app/hooks/useAutentication';
import {AuthContextType} from './types';
import {AppState} from 'react-native';

export const AuthContext = createContext<AuthContextType>({logged: false} as AuthContextType);

export function useAuthContext() {
  return useContext(AuthContext);
}

export default function AuthGuardian({children}: {children: ReactNode}) {
  const [logged, setLogged] = useState(false);

  const appState = useRef(AppState.currentState);

  const {verifyPassword} = useAutentication();

  function login(password: string) {
    if (verifyPassword(password)) {
      setLogged(true);
    }
  }

  function logout() {
    setLogged(false);
  }

  useEffect(() => {
    const appStateListener = AppState.addEventListener('change', nextState => {
      if (nextState === 'background') {
        logout();
      }

      appState.current = nextState;
    });

    return () => {
      appStateListener.remove();
    };
  });

  return <AuthContext.Provider value={{logged, login, logout}}>{children}</AuthContext.Provider>;
}
