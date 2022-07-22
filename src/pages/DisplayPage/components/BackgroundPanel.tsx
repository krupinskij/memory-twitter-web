import { useTranslation } from 'react-i18next';

import Radio, { RadioGroup } from 'components/Radio';
import { ThemeBackground, useTheme } from 'providers/ThemeProvider';

const BackgroundPanel = () => {
  const { themeBackground, changeThemeBackground } = useTheme();
  const { t } = useTranslation();

  return (
    <div className="mb-4">
      <label className="text-sm text-textSecondary font-bold mb-1 block">
        {t('display:background')}
      </label>
      <RadioGroup value={themeBackground}>
        {Object.values(ThemeBackground).map((background) => (
          <div data-theme-background={background} key={background}>
            <Radio value={background} onCheck={() => changeThemeBackground(background)}>
              {t(`display:${background}`)}
            </Radio>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default BackgroundPanel;
