import React, { createContext, useContext } from 'react';

import { useLocalStorage } from './useLocalStorage';
import { LS_USER } from '../globals/ls-keys';

interface AuthContextValue {
  user: User | null;
  signIn: (email: string, password: string) => Promise<User>;
  signOut: () => Promise<void>;
}

function useProvideAuth(): AuthContextValue {
  const [user, setUser] = useLocalStorage<User | null>(LS_USER);

  const signIn = (email: string, password: string): Promise<User> => {
    return new Promise((resolve) =>
      setTimeout(() => {
        const userMock: User = { email: 'user@example.com' };
        setUser(userMock);
        resolve(userMock);
      }, 500)
    );
  };

  const signOut = (): Promise<void> => {
    return new Promise((resolve) =>
      setTimeout(() => {
        setUser(null);
        resolve();
      }, 500)
    );
  };

  return {
    user,
    signIn,
    signOut
  };
}

const authContext = createContext<AuthContextValue | null>(null);

export const ProvideAuth: React.FC = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}> {children} </authContext.Provider>;
};

export default function useAuth(): AuthContextValue {
  const context = useContext(authContext);
  if (context == null) {
    throw new Error('Используй useAuth() внутри ProvideAuth!');
  }
  return context;
}
