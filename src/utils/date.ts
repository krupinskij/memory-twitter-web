import dayjs from 'dayjs';

export const format = (t: number): string => {
  const now = dayjs();
  const then = dayjs.unix(t);
  const diff = dayjs(now.diff(then));

  if (now.diff(then, 'minutes') === 0) {
    return diff.format('s [s.]');
  }

  if (now.diff(then, 'hours') === 0) {
    return diff.format('m [m.]');
  }

  if (now.diff(then, 'days') === 0) {
    return diff.format('H [g.]');
  }

  if (now.diff(then, 'years') === 0) {
    return then.format('DD MMM');
  }

  return then.format('DD MMM YYYY');
};
