import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import API, { QUERY } from 'api';
import BoardCard, { Board } from 'components/Card';
import { randomizeIndexes } from 'helpers';
import { Card, CardType, User } from 'model';

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

  if (!level || !cards) return <div>Error</div>;

  return (
    <Board level={level}>
      {cards.map((card) => (
        <BoardCard card={card} level={level} />
      ))}
    </Board>
  );
};

export default GamePage;
