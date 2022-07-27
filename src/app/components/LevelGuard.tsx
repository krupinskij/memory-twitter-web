import React from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, useParams } from 'react-router';

import { Level, LevelPathParams } from 'model';

type GuardProps = {
  children: React.ReactNode;
};

const LevelGuard: React.FC<GuardProps> = ({ children }) => {
  const { level } = useParams<LevelPathParams>();
  const { t } = useTranslation();

  if (!level || !Object.values(Level).includes(level)) {
    return <Navigate to="/game" state={{ error: t('utils:nolevel') }} />;
  }

  return <>{children}</>;
};

export default LevelGuard;
