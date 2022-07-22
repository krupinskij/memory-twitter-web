import React, { createContext, useCallback, useLayoutEffect, useState } from 'react';

import { StorageKey } from 'model';

import { Theme, ThemeBackground, ThemeColor } from './model';

export const ThemeContext = createContext<Theme | null>(null);

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeBackground, setThemeBackground] = useState(ThemeBackground.Light);
  const [themeColor, setThemeColor] = useState(ThemeColor.Blue);

  useLayoutEffect(() => {
    const themeBackground =
      (localStorage.getItem(StorageKey.ThemeBackground) as ThemeBackground) ||
      ThemeBackground.Light;

    setThemeBackground(themeBackground);
    document.body.dataset.themeBackground = themeBackground;

    const themeColor =
      (localStorage.getItem(StorageKey.ThemeColor) as ThemeColor) || ThemeColor.Blue;

    setThemeColor(themeColor);
    document.body.dataset.themeColor = themeColor;
  }, []);

  const changeThemeBackground = useCallback((themeBackground: ThemeBackground) => {
    setThemeBackground(themeBackground);
    document.body.dataset.themeBackground = themeBackground;
    localStorage.setItem(StorageKey.ThemeBackground, themeBackground);
  }, []);

  const changeThemeColor = useCallback((themeColor: ThemeColor) => {
    setThemeColor(themeColor);
    document.body.dataset.themeColor = themeColor;
    localStorage.setItem(StorageKey.ThemeColor, themeColor);
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
