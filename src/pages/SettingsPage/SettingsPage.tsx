import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Range from 'components/Range';

import LanguagePanel from './components/LanguagePanel';

const range = [
  { label: '0 s', value: 0 },
  { label: '0.5 s', value: 0.5 },
  { label: '1 s', value: 1 },
  { label: '1.5 s', value: 1.5 },
  { label: '2 s', value: 2 },
];

const SettingsPage = () => {
  const { t } = useTranslation();
  const [speed, setSpeed] = useState(1);

  return (
    <div className="mx-16">
      <h1 className="text-center text-2xl font-bold mb-3">{t('settings:title')}</h1>
      <p className="text-center text-textSecondary mb-12 mx-4">{t('settings:subtitle')}</p>
      <div className="mx-2">
        <LanguagePanel />
        <Range value={speed} range={range} onChange={setSpeed} />
      </div>
    </div>
  );
};

export default SettingsPage;
