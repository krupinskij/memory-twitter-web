import { nanoid } from 'nanoid/non-secure';
import React from 'react';
import { Navigate, useParams } from 'react-router';

import { notification$ } from 'components/Notifications';
import i18n from 'i18n';
import { Level, LevelPathParams } from 'model';

type GuardProps = {
  children: React.ReactNode;
};

const LevelGuard: React.FC<GuardProps> = ({ children }) => {
  const { level } = useParams<LevelPathParams>();

  if (!level || !Object.values(Level).includes(level)) {
    const notification = {
      id: nanoid(),
      message: i18n.t('utils:nolevel'),
    };
    notification$.next(notification);

    return <Navigate to="/game" />;
  }

  return <>{children}</>;
};

export default LevelGuard;
