import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Select, { Option } from 'components/Select';
import { languages } from 'i18n/languages';
import i18next from 'i18next';
import { StorageKey } from 'model';

const SettingsPage = () => {
  const [language, setLanguage] = useState(
    () => localStorage.getItem(StorageKey.Language) || 'default'
  );

  const { t } = useTranslation();

  const handleLanguageSelect = (language: string) => {
    localStorage.setItem(StorageKey.Language, language);
    setLanguage(language);
    i18next.changeLanguage();
  };

  return (
    <div>
      Settings Page
      <div>
        <Select label={t('settings:language')} value={language}>
          {languages.map((lng) => {
            const tLang = t(`language:${lng}`);
            const oLang = t(`language:${lng}`, { lng });
            const content = tLang === oLang ? tLang : `${tLang} - ${oLang}`;
            return (
              <Option key={lng} value={lng} onSelect={() => handleLanguageSelect(lng)}>
                {content}
              </Option>
            );
          })}
        </Select>
      </div>
    </div>
  );
};

export default SettingsPage;
