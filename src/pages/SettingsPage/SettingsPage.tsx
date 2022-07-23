import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Checkbox, { CheckboxGroup } from 'components/Checkbox';

import AnimationSpeedPanel from './components/AnimationSpeedPanel';
import LanguagePanel from './components/LanguagePanel';

const SettingsPage = () => {
  const { t } = useTranslation();

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  return (
    <div className="mx-16">
      <h1 className="text-center text-2xl font-bold mb-3">{t('settings:title')}</h1>
      <p className="text-center text-textSecondary mb-12 mx-4">{t('settings:subtitle')}</p>
      <div className="mx-2">
        <LanguagePanel />
        <AnimationSpeedPanel />
        <CheckboxGroup>
          <Checkbox checked={checked1} onCheck={() => setChecked1((checked) => !checked)}>
            Dummy text
          </Checkbox>
          <Checkbox checked={checked2} onCheck={() => setChecked2((checked) => !checked)}>
            Another dummy text
          </Checkbox>
        </CheckboxGroup>
      </div>
    </div>
  );
};

export default SettingsPage;
