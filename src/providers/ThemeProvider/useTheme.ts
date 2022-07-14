import { useContext } from 'react';

import { ThemeContext } from './ThemeProvider';
import { Theme } from './model';

const useTheme = (): Theme => {
  const themeContext = useContext<Theme | null>(ThemeContext);

  if (!themeContext) {
    throw new Error('useTheme hook can only be used under ThemeProvider');
  }

  return themeContext;
};

export default useTheme;
