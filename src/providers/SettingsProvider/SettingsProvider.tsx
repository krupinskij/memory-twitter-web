import React, { createContext, useCallback, useReducer, useState } from 'react';

import { StorageKey } from 'model';

import { AnimationSpeed, availableValues, Settings, Statistics, StatisticsOptions } from './model';

export const SettingsContext = createContext<Settings | null>(null);

type SettignsProviderProps = {
  children: React.ReactNode;
};

const statisticsReducer = (state: Statistics, action: StatisticsOptions) => {
  switch (action) {
    case 'clicks':
      localStorage.setItem(StorageKey.StatisticsClicks, String(!state.showClicks));
      return { ...state, showClicks: !state.showClicks };
    case 'remain':
      localStorage.setItem(StorageKey.StatisticsRemain, String(!state.showRemain));
      return { ...state, showRemain: !state.showRemain };
    case 'time':
      localStorage.setItem(StorageKey.StatisticsTime, String(!state.showTime));
      return { ...state, showTime: !state.showTime };
    default:
      return state;
  }
};

const getAnimationSpeed = (): AnimationSpeed => {
  const storageAS = parseFloat(
    localStorage.getItem(StorageKey.AnimationSpeed) || ''
  ) as AnimationSpeed;
  return availableValues.includes(storageAS) ? storageAS : 1;
};

const getStatisticsFromKey = (key: StorageKey): boolean => {
  const value = localStorage.getItem(key);

  if (value === null) return true;

  return Boolean(value);
};

const ThemeProvider = ({ children }: SettignsProviderProps) => {
  const [animationSpeed, setAnimationSpeed] = useState<AnimationSpeed>(getAnimationSpeed);
  const [statistics, dispatchStatistics] = useReducer(statisticsReducer, {
    showClicks: getStatisticsFromKey(StorageKey.StatisticsClicks),
    showRemain: getStatisticsFromKey(StorageKey.StatisticsRemain),
    showTime: getStatisticsFromKey(StorageKey.StatisticsTime),
  });

  const changeAnimationSpeed = useCallback((animationSpeed: AnimationSpeed) => {
    setAnimationSpeed(animationSpeed);
    localStorage.setItem(StorageKey.AnimationSpeed, String(animationSpeed));
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        animationSpeed,
        changeAnimationSpeed,
        statistics,
        toggleStatisticsOption: dispatchStatistics,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default ThemeProvider;
