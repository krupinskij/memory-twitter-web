import React, { createContext, useCallback, useLayoutEffect, useState } from 'react';

import { StorageKey } from 'model';

import { AnimationSpeed, availableValues, Settings } from './model';

export const SettingsContext = createContext<Settings | null>(null);

type SettignsProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: SettignsProviderProps) => {
  const [animationSpeed, setAnimationSpeed] = useState<AnimationSpeed>(1);

  useLayoutEffect(() => {
    const storageAS = parseFloat(
      localStorage.getItem(StorageKey.AnimationSpeed) || ''
    ) as AnimationSpeed;
    const animationSpeed = availableValues.includes(storageAS) ? storageAS : 1;

    setAnimationSpeed(animationSpeed);
  }, []);

  const changeAnimationSpeed = useCallback((animationSpeed: AnimationSpeed) => {
    setAnimationSpeed(animationSpeed);
    localStorage.setItem(StorageKey.AnimationSpeed, String(animationSpeed));
  }, []);

  return (
    <SettingsContext.Provider value={{ animationSpeed, changeAnimationSpeed }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default ThemeProvider;
