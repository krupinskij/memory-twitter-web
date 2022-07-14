import Radio, { RadioGroup } from 'components/Radio';
import { ThemeBackground, useTheme } from 'providers/ThemeProvider';

const DisplayPage = () => {
  const { themeBackground, changeThemeBackground } = useTheme();

  return (
    <div className="mx-16">
      <h1 className="text-center text-2xl font-bold mb-3">Personalizuj swój widok</h1>
      <p className="text-center text-textSecondary mb-5 mx-4">
        Zarządzaj ustawieniami koloru i tła. Te ustawienia będą mieć wpływ na wszystkie konta
        używane w tej przeglądarce.
      </p>
      <label className="text-sm text-textSecondary font-bold mb-1">Tło</label>
      <div className="flex flex-col gap-4 items-center">
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
    </div>
  );
};

export default DisplayPage;
