import { useParams } from 'react-router-dom';

import { PathParams } from './model';

const GamePage = () => {
  const { level } = useParams<PathParams>();

  return <div>{level}</div>;
};

export default GamePage;
