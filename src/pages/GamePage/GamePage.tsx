import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import API, { QUERY } from 'api';
import Button from 'components/Button';
import BoardCard, { Board } from 'components/Card';
import useGame from 'hooks/useGame';
import useTimer from 'hooks/useTimer';
import { Card, CardType, Level, MapLevel, User } from 'model';
import { calcDelay, randomizeIndexes } from 'utils/helpers';

import Info from './components/Info';
import Panel from './components/Panel';
import ResultPanel from './components/ResultPanel';
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
  const { level = Level.Easy } = useParams<PathParams>();
  const { data: cards } = useQuery<User[], unknown, Card[]>(
    QUERY.FOLLOWINGS,
    () => API.getFollowings(level),
    {
      select: handleSelect,
      refetchOnWindowFocus: false,
    }
  );

  const numberOfCards = MapLevel[level] * 2;
  const { cardCount, clickCount } = useGame(numberOfCards);
  const { time, timeFormat, start, stop } = useTimer('%m:%s');

  const [isStarted, setIsStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  const boardControls = useAnimation();
  const resultControls = useAnimation();

  const { mutate: saveResult } = useMutation(API.saveResult);

  useEffect(() => {
    if (cardCount === 0) {
      const time = stop();
      saveResult(
        { clicks: clickCount, time, level },
        {
          onSuccess: () => showResult(),
        }
      );
    }
  }, [cardCount, clickCount, stop]);

  const handleStart = () => {
    setIsStarted(true);
    start();
  };

  const showResult = async () => {
    await boardControls.start(() => ({ scale: [1, 1], transition: { delay: 1 } }));
    setIsEnded(true);
    await boardControls.start(() => ({ scale: [1, 0], transition: { duration: 0.5 } }));
    boardControls.set({ height: 0 });
    resultControls.set({ height: 'auto' });
    await resultControls.start(() => ({ scale: [0, 1], transition: { duration: 0.5 } }));
  };

  if (!level || !cards) return <div>Error</div>;

  return (
    <div>
      <motion.div
        animate={resultControls}
        initial={{ scale: 0, height: 0 }}
        className="flex flex-col items-center h-0"
      >
        {isEnded && <ResultPanel clicks={clickCount} time={time} level={level} />}
      </motion.div>
      <motion.div animate={boardControls} className="flex flex-col items-center">
        <Board level={level} started={isStarted}>
          {cards.map((card, idx) => (
            <BoardCard key={idx} card={card} level={level} delay={calcDelay(idx, numberOfCards)} />
          ))}
        </Board>
        {!isEnded && (
          <Panel
            title="Statystyki:"
            action={
              !isStarted && (
                <Button variant="outlined" onClick={handleStart}>
                  Start
                </Button>
              )
            }
          >
            <Info label="Kliknięcia:">{clickCount}</Info>
            <Info label="Pozostało:">{cardCount}</Info>
            <Info label="Upłynęło:">{timeFormat}</Info>
          </Panel>
        )}
      </motion.div>
    </div>
  );
};

export default GamePage;
