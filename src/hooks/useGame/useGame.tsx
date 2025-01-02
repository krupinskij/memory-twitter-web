import { useEffect, useState } from 'react';

import { correctPair$, queueCard$ } from 'utils/queues';

const useGame = (
  numberOfCards: number
): {
  cardCount: number;
  clickCount: number;
} => {
  const [cardCount, setCardCount] = useState(numberOfCards);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const correctPairSubscription = correctPair$.subscribe(() => {
      setCardCount((count) => count - 2);
    });

    const queueSubscription = queueCard$.subscribe(() => {
      setClickCount((count) => count + 1);
    });

    return () => {
      correctPairSubscription.unsubscribe();
      queueSubscription.unsubscribe();
    };
  }, [queueCard$]);

  return {
    cardCount,
    clickCount,
  };
};

export default useGame;
