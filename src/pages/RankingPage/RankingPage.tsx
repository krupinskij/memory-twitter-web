import { useQuery } from 'react-query';

import API, { QUERY } from 'api';
import { Level } from 'model';

import ResultItem from './components/ResultItem';

const RankingPage = () => {
  const { data: results } = useQuery(QUERY.RESULTS, () => API.getResults(Level.Easy), {
    onSuccess(data) {
      console.log(data);
    },
  });

  if (!results) {
    return <div>Error</div>;
  }

  return (
    <div className="mx-[0vw]">
      {results.map((result, idx) => (
        <ResultItem
          key={result.id}
          {...result}
          pos={idx + 1}
          isFirst={idx === 0}
          isLast={results.length === idx + 1}
        />
      ))}
    </div>
  );
};

export default RankingPage;
