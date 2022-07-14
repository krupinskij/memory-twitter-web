import React, { createContext, useCallback, useLayoutEffect, useState } from 'react';

import { StorageKeys, Theme, ThemeBackground, ThemeColor } from './model';

export const ThemeContext = createContext<Theme | null>(null);

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeBackground, setThemeBackground] = useState(ThemeBackground.Light);
  const [themeColor, setThemeColor] = useState(ThemeColor.Blue);

  useLayoutEffect(() => {
    const themeBackground =
      (localStorage.getItem(StorageKeys.ThemeBackground) as ThemeBackground) ||
      ThemeBackground.Light;

    setThemeBackground(themeBackground);
    document.body.dataset.themeBackground = themeBackground;

    const themeColor =
      (localStorage.getItem(StorageKeys.ThemeColor) as ThemeColor) || ThemeColor.Blue;

    setThemeColor(themeColor);
    document.body.dataset.themeColor = themeColor;
  }, []);

  const changeThemeBackground = useCallback((themeBackground: ThemeBackground) => {
    setThemeBackground(themeBackground);
    document.body.dataset.themeBackground = themeBackground;
    localStorage.setItem(StorageKeys.ThemeBackground, themeBackground);
  }, []);

  const changeThemeColor = useCallback((themeColor: ThemeColor) => {
    setThemeColor(themeColor);
    document.body.dataset.themeColor = themeColor;
    localStorage.setItem(StorageKeys.ThemeColor, themeColor);
  }, []);

  return (
    <ThemeContext.Provider
      value={{ themeBackground, themeColor, changeThemeBackground, changeThemeColor }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
