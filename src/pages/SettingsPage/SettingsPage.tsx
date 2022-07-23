import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import AnimationSpeedPanel from './components/AnimationSpeedPanel';
import LanguagePanel from './components/LanguagePanel';

const SettingsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-16">
      <h1 className="text-center text-2xl font-bold mb-3">{t('settings:title')}</h1>
      <p className="text-center text-textSecondary mb-12 mx-4">{t('settings:subtitle')}</p>
      <div className="mx-2">
        <LanguagePanel />
        <AnimationSpeedPanel />
      </div>
    </div>
  );
};

export default SettingsPage;
