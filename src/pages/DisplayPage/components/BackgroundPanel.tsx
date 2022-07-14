import Radio, { RadioGroup } from 'components/Radio';
import { ThemeBackground, useTheme } from 'providers/ThemeProvider';

const BackgroundPanel = () => {
  const { themeBackground, changeThemeBackground } = useTheme();
  return (
    <div className="mb-4">
      <label className="text-sm text-textSecondary font-bold mb-1 block">Tło</label>
      <RadioGroup value={themeBackground}>
        <div data-theme-background={ThemeBackground.Light}>
          <Radio
            value={ThemeBackground.Light}
            onCheck={() => changeThemeBackground(ThemeBackground.Light)}
          >
            Domyślnie
          </Radio>
        </div>
        <div data-theme-background={ThemeBackground.Dark}>
          <Radio
            value={ThemeBackground.Dark}
            onCheck={() => changeThemeBackground(ThemeBackground.Dark)}
          >
            Zmierzch
          </Radio>
        </div>

        <div data-theme-background={ThemeBackground.Darker}>
          <Radio
            value={ThemeBackground.Darker}
            onCheck={() => changeThemeBackground(ThemeBackground.Darker)}
          >
            Noc
          </Radio>
        </div>
      </RadioGroup>
    </div>
  );
};

export default BackgroundPanel;
