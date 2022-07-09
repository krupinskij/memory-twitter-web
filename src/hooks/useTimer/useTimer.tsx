import { useCallback, useEffect, useRef, useState } from 'react';

import { Timer } from './Timer';

const useTimer = (
  format: string
): {
  elapsedTime: string;
  start: () => void;
  stop: () => void;
  timeElapsed: () => number;
} => {
  const timerRef = useRef(new Timer());
  const [elapsedTime, setElapsedTime] = useState(timerRef.current.timeElapsedFormat(format));

  const start = useCallback(() => timerRef.current.start(), [timerRef]);
  const stop = useCallback(() => {
    timerRef.current.stop();
    setElapsedTime(timerRef.current.timeElapsedFormat(format));
  }, [timerRef]);
  const timeElapsed = useCallback(() => timerRef.current.timeElapsed(), [timerRef]);

  useEffect(() => {
    timerRef.current.addEventListener('tick', () => {
      setElapsedTime(timerRef.current.timeElapsedFormat(format));
    });
  }, [format]);

  return {
    start,
    stop,
    timeElapsed,
    elapsedTime,
  };
};

export default useTimer;
