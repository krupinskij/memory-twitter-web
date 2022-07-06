import { partition, Subject } from 'rxjs';
import { scan, delay, filter } from 'rxjs/operators';

import { Card } from 'model';

const accumulator = (pair: Card[], card: Card): Card[] => {
  if (pair.length === 1) {
    if (pair[0] === card) return [];

    return [...pair, card];
  }

  return [card];
};

export const queueCard$ = new Subject<Card>();
const pairCards$ = queueCard$.pipe(
  scan(accumulator, []),
  filter((pair) => pair.length === 2),
  delay(2000)
);
const [correctCard$, toCloseCard$] = partition(
  pairCards$,
  ([card1, card2]) => card1.id === card2.id
);

export { correctCard$, toCloseCard$ };
