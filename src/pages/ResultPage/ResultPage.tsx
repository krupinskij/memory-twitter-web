import { useQuery } from 'react-query';
import { Navigate, useParams } from 'react-router-dom';

import API, { QUERY } from 'api';
import { Spinner } from 'components/Loading';
import { Result, ResultPathParams } from 'model';

import ResultPanel from './components/ResultPanel';

const ResultPage = () => {
  const { resultId = '' } = useParams<ResultPathParams>();

  const {
    data: result,
    isLoading,
    isError,
  } = useQuery<Result>([QUERY.RESULT, resultId], () => API.getResult(resultId), {
    enabled: !!resultId,
  });

  if (isError) return <Navigate to="/game" />;

  if (isLoading || !result) return <Spinner />;

  const { clicks, time, level, tweeted } = result;

  return (
    <div className="flex flex-col items-center">
      <ResultPanel
        clicks={clicks}
        time={time}
        level={level}
        tweeted={tweeted}
        resultId={resultId}
      />
      ;
    </div>
  );
};

export default ResultPage;
