import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Select, { Option } from 'components/Select';
import { languages } from 'i18n';
import i18next from 'i18next';
import { StorageKey } from 'model';

const LanguagePanel = () => {
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
    <div className="mb-8">
      <label className="text-sm text-textSecondary font-bold mb-1 block">
        {t('settings:language')}
      </label>
      <Select value={language}>
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
  );
};

export default LanguagePanel;
