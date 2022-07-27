import { nanoid } from 'nanoid/non-secure';
import React, { createContext, useCallback } from 'react';

import Notifications from './components/Notifications';
import { notification$, NotificationUtils } from './model';

export const NotificationContext = createContext<NotificationUtils | null>(null);

type NotificationProviderProps = {
  children: React.ReactNode;
};

const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const send = useCallback((message: string) => {
    const notification = {
      id: nanoid(),
      message,
    };

    notification$.next(notification);
  }, []);

  return (
    <NotificationContext.Provider value={{ send }}>
      {children}
      <Notifications />
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
