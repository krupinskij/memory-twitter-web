import React, { createContext, useCallback, useLayoutEffect, useState } from 'react';

import { StorageKeys, Theme, ThemeBackground } from './model';

export const ThemeContext = createContext<Theme | null>(null);

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeBackground, setThemeBackground] = useState(ThemeBackground.Light);

  useLayoutEffect(() => {
    const themeBackground =
      (localStorage.getItem(StorageKeys.ThemeBackground) as ThemeBackground) ||
      ThemeBackground.Light;

    setThemeBackground(themeBackground);
    document.body.dataset.themeBackground = themeBackground;
  }, []);

  const changeThemeBackground = useCallback((themeBackground: ThemeBackground) => {
    setThemeBackground(themeBackground);
    document.body.dataset.themeBackground = themeBackground;
    localStorage.setItem(StorageKeys.ThemeBackground, themeBackground);
  }, []);

  return (
    <ThemeContext.Provider value={{ themeBackground, changeThemeBackground }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
