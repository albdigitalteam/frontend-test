import React, {useState, createContext, useCallback, useContext} from 'react';

import {IUser} from '../models/user.model';

interface AuthState {
  user: IUser;
}


interface AuthContextData {
  user: IUser;
  signIn(user: IUser): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('@AirLiquideTest:user');

    if (user) {
      return {user: JSON.parse(user)};
    }

    return {} as AuthState;
  });
  const signIn = useCallback(async (user: IUser) => {
    localStorage.setItem('@AirLiquideTest:user', JSON.stringify(user));
    setData({user});
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@AirLiquideTest:token');
    localStorage.removeItem('@AirLiquideTest:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{user: data.user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an Authprovider');
  }

  return context;
}

export {AuthProvider, useAuth};
