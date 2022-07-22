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

  const handleLanguageSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value;

    localStorage.setItem(StorageKey.Language, language);
    setLanguage(language);
    i18next.changeLanguage();
  };

  return (
    <div>
      Settings Page
      <div>
        <Select value={language} onChange={handleLanguageSelect}>
          {languages.map((lng) => {
            const content =
              lng === language
                ? t(`language:${lng}`)
                : `${t(`language:${lng}`)} - ${t(`language:${lng}`, { lng })}`;
            return <Option value={lng}>{content}</Option>;
          })}
        </Select>
      </div>
    </div>
  );
};

export default SettingsPage;
