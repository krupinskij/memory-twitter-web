import API, { QUERY } from 'api';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { PathParams } from './model';

const GamePage = () => {
  const { level } = useParams<PathParams>();
  const { data } = useQuery([QUERY.FOLLOWINGS, level], API.getFollwings, {
    onSuccess: (data) => console.log(data),
  });

  return <div>{level}</div>;
};

export default GamePage;
