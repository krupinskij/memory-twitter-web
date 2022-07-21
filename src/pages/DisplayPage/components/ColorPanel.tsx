import { useTranslation } from 'react-i18next';

import { RadioCircle, RadioGroup } from 'components/Radio';
import { ThemeColor, useTheme } from 'providers/ThemeProvider';

const ColorPanel = () => {
  const { themeColor, changeThemeColor } = useTheme();
  const { t } = useTranslation();

  return (
    <div className="mb-4">
      <label className="text-sm text-textSecondary font-bold mb-1 block">
        {t('display:color')}
      </label>
      <RadioGroup value={themeColor}>
        {Object.values(ThemeColor).map((color) => (
          <div data-theme-color={color} key={color} className="justify-self-center w-min">
            <RadioCircle value={color} onCheck={() => changeThemeColor(color)} />
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default ColorPanel;
