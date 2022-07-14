import { RadioCircle, RadioGroup } from 'components/Radio';
import { ThemeColor, useTheme } from 'providers/ThemeProvider';

const ColorPanel = () => {
  const { themeColor, changeThemeColor } = useTheme();
  return (
    <div className="mb-4">
      <label className="text-sm text-textSecondary font-bold mb-1 block">Kolor</label>
      <RadioGroup value={themeColor}>
        {Object.values(ThemeColor).map((color) => (
          <div data-theme-color={color} className="justify-self-center w-min">
            <RadioCircle value={color} onCheck={() => changeThemeColor(color)} />
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default ColorPanel;
