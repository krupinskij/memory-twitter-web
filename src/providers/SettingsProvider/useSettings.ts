import { useContext } from 'react';

import { SettingsContext } from './SettingsProvider';
import { Settings } from './model';

const useSettings = (): Settings => {
  const themeContext = useContext<Settings | null>(SettingsContext);

  if (!themeContext) {
    throw new Error('useSettings hook can only be used under SettingsProvider');
  }

  return themeContext;
};

export default useSettings;
