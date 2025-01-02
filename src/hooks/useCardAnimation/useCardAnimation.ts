import { useAnimation, AnimationControls } from 'framer-motion';
import { useCallback, useMemo, useState } from 'react';

import { useSettings } from 'providers/SettingsProvider';

import { Animation } from './model';

const useCardAnimation = (): {
  controls: AnimationControls;
  animation: Animation;
  isHidden: boolean;
  isBlocked: boolean;
} => {
  const [isHidden, setIsHidden] = useState(true);
  const [isBlocked, setIsBlocked] = useState(true);
  const controls = useAnimation();

  const { animationSpeed } = useSettings();

  const duration = animationSpeed * 0.5;

  const show = useCallback(
    async (delay: number = 0) => {
      setIsBlocked(true);
      await controls.start(() => ({ scaleX: [1, 0], transition: { delay, duration } }));
      setIsHidden(false);
      await controls.start(() => ({ scaleX: [0, 1], transition: { delay, duration } }));
      setIsBlocked(false);
    },
    [controls]
  );

  const hide = useCallback(
    async (delay: number = 0) => {
      setIsBlocked(true);
      await controls.start(() => ({ scaleX: [1, 0], transition: { delay, duration } }));
      setIsHidden(true);
      await controls.start(() => ({ scaleX: [0, 1], transition: { delay, duration } }));
      setIsBlocked(false);
    },
    [controls]
  );

  const display = useCallback(
    async (delay: number = 0) => {
      await controls.start(() => ({
        opacity: [0, 1, 0.7, 1],
        transition: { delay },
      }));
      setIsBlocked(false);
    },
    [controls]
  );

  const remove = useCallback(
    async (delay: number = 0) => {
      setIsBlocked(true);
      await controls.start(() => ({ scale: [1, 0], transition: { delay, duration } }));
    },
    [controls]
  );

  const animation = useMemo(
    () => ({
      show,
      hide,
      display,
      remove,
    }),
    [show, hide, display, remove]
  );

  return { controls, animation, isHidden, isBlocked };
};

export default useCardAnimation;
