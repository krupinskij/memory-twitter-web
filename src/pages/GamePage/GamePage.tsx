import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import API, { QUERY } from 'api';
import BoardCard, { Board } from 'components/Card';
import { calcDelay, randomizeIndexes } from 'helpers';
import { Card, CardType, MapLayout, User } from 'model';

import { PathParams } from './model';

const handleSelect = (followings: User[]): Card[] => {
  const numberOfCards = 2 * followings.length;
  const randomIndexes = randomizeIndexes(numberOfCards);

  return randomIndexes.map((index, idx) => {
    const following = followings[index >> 1];
    const delay = calcDelay(idx, numberOfCards);

    if (index % 2 === 0) {
      return {
        type: CardType.Picture,
        id: following.id,
        data: following.pp,
        delay,
      };
    }

    return {
      type: CardType.Name,
      id: following.id,
      data: following.nm,
      delay,
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

  if (!level || !cards) return <div>Error</div>;

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Board level={level}>
        {cards.map((card, idx) => (
          <BoardCard key={idx} card={card} level={level} />
        ))}
      </Board>
    </div>
  );
};

export default GamePage;
