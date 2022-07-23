import { useTranslation } from 'react-i18next';

import Checkbox, { CheckboxGroup } from 'components/Checkbox';
import { useSettings } from 'providers/SettingsProvider';

const StatisticsPanel = () => {
  const { t } = useTranslation();

  const { statistics, toggleStatisticsOption } = useSettings();

  return (
    <div className="mb-8">
      <label className="text-sm text-textSecondary font-bold mb-1 block">
        {t('settings:statistics')}
      </label>
      <CheckboxGroup>
        <Checkbox checked={statistics.showClicks} onCheck={() => toggleStatisticsOption('clicks')}>
          {t('settings:clicks')}
        </Checkbox>
        <Checkbox checked={statistics.showRemain} onCheck={() => toggleStatisticsOption('remain')}>
          {t('settings:remain')}
        </Checkbox>
        <Checkbox checked={statistics.showTime} onCheck={() => toggleStatisticsOption('time')}>
          {t('settings:time')}
        </Checkbox>
      </CheckboxGroup>
    </div>
  );
};

export default StatisticsPanel;
