import { useCallback, useEffect, useRef, useState } from 'react';

import { Timer } from './Timer';

const useTimer = (
  format: string
): {
  timeFormat: string;
  time: number;
  start: () => void;
  stop: () => number;
} => {
  const timerRef = useRef(new Timer());
  const [timeFormat, setTimeFormat] = useState(timerRef.current.timeFormat(format));

  const start = useCallback(() => timerRef.current.start(), [timerRef]);
  const stop = useCallback(() => {
    const time = timerRef.current.stop();
    setTimeFormat(timerRef.current.timeFormat(format));

    return time;
  }, [timerRef]);

  useEffect(() => {
    timerRef.current.addEventListener('tick', () => {
      setTimeFormat(timerRef.current.timeFormat(format));
    });
  }, [format]);

  return {
    start,
    stop,
    time: timerRef.current.time(),
    timeFormat,
  };
};

export default useTimer;
