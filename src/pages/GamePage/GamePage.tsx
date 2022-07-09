import useGame from 'hooks/useGame';
import useTimer from 'hooks/useTimer';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import API, { QUERY } from 'api';
import Button from 'components/Button';
import BoardCard, { Board } from 'components/Card';
import Info, { Panel } from 'components/Info';
import { Card, CardType, Level, MapLevel, User } from 'model';
import { calcDelay, randomizeIndexes } from 'utils/helpers';

import { PathParams } from './model';

const handleSelect = (followings: User[]): Card[] => {
  const numberOfCards = 2 * followings.length;
  const randomIndexes = randomizeIndexes(numberOfCards);

  return randomIndexes.map((index) => {
    const following = followings[index >> 1];

    if (index % 2 === 0) {
      return {
        type: CardType.Picture,
        id: following.id,
        data: following.pp,
      };
    }

    return {
      type: CardType.Name,
      id: following.id,
      data: following.nm,
    };
  });
};

const GamePage = () => {
  const { level } = useParams<PathParams>();
  const { data: cards } = useQuery<User[], unknown, Card[]>(
    [QUERY.FOLLOWINGS, level],
    API.getFollowings,
    {
      select: handleSelect,
      refetchOnWindowFocus: false,
    }
  );

  const numberOfCards = level ? MapLevel[level || Level.Easy] * 2 : 0;
  const { cardCount, clickCount } = useGame(numberOfCards);
  const { elapsedTime, start, stop, timeElapsed } = useTimer('%m:%s');

  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    console.log('Zostało: ' + cardCount);

    if (cardCount === 0) {
      stop();
      console.log('Wygrana', clickCount, timeElapsed());
    }
  }, [cardCount, clickCount, stop]);

  const handleStart = () => {
    setIsStarted(true);
    start();
  };

  if (!level || !cards) return <div>Error</div>;

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Board level={level} started={isStarted}>
        {cards.map((card, idx) => (
          <BoardCard key={idx} card={card} level={level} delay={calcDelay(idx, numberOfCards)} />
        ))}
      </Board>
      {isStarted ? (
        <Panel>
          <Info label="Kliknięcia">{clickCount}</Info>
          <Info label="Pozostało">{cardCount}</Info>
          <Info label="Upłynęło">{elapsedTime}</Info>
        </Panel>
      ) : (
        <Button size="large" onClick={handleStart}>
          Graj!
        </Button>
      )}
    </div>
  );
};

export default GamePage;
