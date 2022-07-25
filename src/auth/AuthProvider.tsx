import React, { createContext } from 'react';
import { useQuery } from 'react-query';

import API, { QUERY } from 'api';
import { LogoPlaceholder } from 'components/Loading';
import { User } from 'model';

type Auth = {
  user?: User;
};

export const AuthContext = createContext<Auth>({});

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { data: user, isLoading } = useQuery(QUERY.CURRENT_USER, API.getCurrentUser, {
    retry: 1,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: (data) => (data ? 10 * 60 * 1000 : false),
  });

  if (isLoading) return <LogoPlaceholder />;

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
