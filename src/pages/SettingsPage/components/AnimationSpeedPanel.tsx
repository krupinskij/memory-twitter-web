import { useTranslation } from 'react-i18next';

import Range from 'components/Range';
import { AnimationSpeed, useSettings } from 'providers/SettingsProvider';

const range: { label: string; value: AnimationSpeed }[] = [
  { label: '0 s', value: 0 },
  { label: '0.5 s', value: 0.5 },
  { label: '1 s', value: 1 },
  { label: '1.5 s', value: 1.5 },
  { label: '2 s', value: 2 },
];

const AnimationSpeedPanel = () => {
  const { animationSpeed, changeAnimationSpeed } = useSettings();
  const { t } = useTranslation();

  return (
    <div className="mb-8">
      <label className="text-sm text-textSecondary font-bold mb-1 block">
        {t('settings:animation-speed')}
      </label>
      <Range value={animationSpeed} range={range} onChange={changeAnimationSpeed} />
    </div>
  );
};

export default AnimationSpeedPanel;
