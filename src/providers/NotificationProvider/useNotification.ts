import { useContext } from 'react';

import { NotificationContext } from './NotificationProvider';
import { NotificationUtils } from './model';

const useNotification = (): NotificationUtils => {
  const themeContext = useContext<NotificationUtils | null>(NotificationContext);

  if (!themeContext) {
    throw new Error('useNotification hook can only be used under NotificationProvider');
  }

  return themeContext;
};

export default useNotification;
