import React, { createContext } from 'react';
import { useQuery } from 'react-query';

import API, { QUERY } from 'api';
import { User } from 'model';

type Auth = {
  user?: User;
};

export const AuthContext = createContext<Auth>({});

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { data: user } = useQuery(QUERY.CURRENT_USER, API.getCurrentUser, {
    retry: 1,
    refetchOnMount: false,
  });
  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
