import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation, useQuery } from 'react-query';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import API, { QUERY } from 'api';
import Button from 'components/Button';
import BoardCard, { Board } from 'components/Card';
import { Spinner } from 'components/Loading';
import useGame from 'hooks/useGame';
import useTimer from 'hooks/useTimer';
import { Card, CardType, Level, LevelPathParams, MapLevel, User } from 'model';
import { useSettings } from 'providers/SettingsProvider';
import { calcDelay, randomizeIndexes } from 'utils/helpers';

import Info from './components/Info';
import Panel from './components/Panel';

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
  const { level = Level.Easy } = useParams<LevelPathParams>();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { data: cards, isError } = useQuery<User[], unknown, Card[]>(
    QUERY.FOLLOWINGS,
    () => API.getFollowings(level),
    {
      select: handleSelect,
      refetchOnWindowFocus: false,
    }
  );

  const numberOfCards = MapLevel[level] * 2;
  const { cardCount, clickCount } = useGame(numberOfCards);
  const { timeFormat, start, stop } = useTimer('%m:%s');

  const [isStarted, setIsStarted] = useState(false);

  const { mutate: saveResult } = useMutation(API.saveResult);

  const {
    statistics: { showClicks, showRemain, showTime },
  } = useSettings();

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (cardCount === 0) {
      const time = stop();
      saveResult(
        { clicks: clickCount, time, level },
        {
          onSuccess: (data) => {
            timeout = setTimeout(() => navigate(`/result/${data.id}`), 3000);
          },
        }
      );
    }

    () => clearTimeout(timeout);
  }, [cardCount, clickCount, stop]);

  const handleStart = () => {
    setIsStarted(true);
    start();
  };

  if (isError) return <Navigate to="/game" />;

  if (!level || !cards) return <Spinner />;

  const showStatistics = showClicks || showRemain || showTime;

  return (
    <div className="flex flex-col items-center">
      <Board level={level} started={isStarted}>
        {cards.map((card, idx) => (
          <BoardCard key={idx} card={card} level={level} delay={calcDelay(idx, numberOfCards)} />
        ))}
      </Board>
      <Panel
        visible={showStatistics}
        title={t('game:statistics')}
        action={
          !isStarted && (
            <Button variant="outlined" onClick={handleStart}>
              {t('game:start')}
            </Button>
          )
        }
      >
        {showClicks && <Info label={t('game:clicks')}>{clickCount}</Info>}
        {showRemain && <Info label={t('game:remain')}>{cardCount}</Info>}
        {showTime && <Info label={t('game:time')}>{timeFormat}</Info>}
      </Panel>
    </div>
  );
};

export default GamePage;
