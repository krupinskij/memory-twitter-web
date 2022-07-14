import React from 'react';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { AuthProvider } from 'auth';
import { queryClient } from 'config';
import ThemeProvider from 'providers/ThemeProvider';

const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <AuthProvider>
          <ThemeProvider>
            <BrowserRouter>{children}</BrowserRouter>
          </ThemeProvider>
        </AuthProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default AppProviders;
