import React from 'react';
import { Navigate } from 'react-router';

import { useAuth } from 'auth';

type GuardProps = {
  children: React.ReactNode;
};

const AuthGuard: React.FC<GuardProps> = ({ children }) => {
  const { user } = useAuth();

  return !!user ? <>{children}</> : <Navigate to="/" />;
};

export default AuthGuard;
