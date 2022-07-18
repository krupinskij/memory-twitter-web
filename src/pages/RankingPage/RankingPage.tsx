import { useQuery } from 'react-query';

import API from 'api';

const RankingPage = () => {
  const { data } = useQuery('dasda', API.getResults, {
    onSuccess(data) {
      console.log(data);
    },
  });
  return <div>Ranking Page</div>;
};

export default RankingPage;
