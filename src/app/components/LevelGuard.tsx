import { nanoid } from 'nanoid/non-secure';
import React, { memo } from 'react';
import { Navigate, useParams } from 'react-router';
import { delay } from 'rxjs';

import i18n from 'i18n';
import { Level, LevelPathParams } from 'model';
import { notification$, useNotification } from 'providers/NotificationProvider';

type GuardProps = {
  children: React.ReactNode;
};

const LevelGuard: React.FC<GuardProps> = ({ children }) => {
  const { level } = useParams<LevelPathParams>();

  if (!level || !Object.values(Level).includes(level)) {
    return <Navigate to="/game" />;
  }

  return <>{children}</>;
};

export default LevelGuard;
