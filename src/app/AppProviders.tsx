import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from 'auth';
import { queryClient } from 'config';
import i18n from 'i18n';
import NotificationProvider from 'providers/NotificationProvider';
import SettingsProvider from 'providers/SettingsProvider';
import ThemeProvider from 'providers/ThemeProvider';

const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NotificationProvider>
        <I18nextProvider i18n={i18n}>
          <AuthProvider>
            <SettingsProvider>
              <ThemeProvider>
                <BrowserRouter>{children}</BrowserRouter>
              </ThemeProvider>
            </SettingsProvider>
          </AuthProvider>
        </I18nextProvider>
      </NotificationProvider>
    </QueryClientProvider>
  );
};

export default AppProviders;
