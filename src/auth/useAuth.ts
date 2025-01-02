import { useContext } from 'react';

import { User } from 'model';

import { AuthContext } from './AuthProvider';

const useAuth = (): {
  user?: User;
} => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth hook can only be used under AuthProvider');
  }

  return context;
};

export default useAuth;
