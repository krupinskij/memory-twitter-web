import { useState } from 'react';
import { useQuery } from 'react-query';

import API, { QUERY } from 'api';
import { Level } from 'model';

import Panel from './components/Panel';
import Radio from './components/Radio';
import RadioGroup from './components/RadioGroup';
import ResultItem from './components/ResultItem';
import { Order, Users } from './model';

const RankingPage = () => {
  const [level, setLevel] = useState(Level.Easy);
  const [order, setOrder] = useState(Order.Clicks);
  const [users, setUsers] = useState(Users.Together);

  const { data: results } = useQuery(QUERY.RESULTS, () => API.getResults(Level.Easy), {
    onSuccess(data) {
      console.log(data);
    },
  });

  if (!results) {
    return <div>Error</div>;
  }

  return (
    <>
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
      <Panel title="Opcje">
        <RadioGroup title="Poziom" value={level}>
          <Radio value={Level.Easy} onCheck={() => setLevel(Level.Easy)}>
            Łatwy
          </Radio>
          <Radio value={Level.Medium} onCheck={() => setLevel(Level.Medium)}>
            Średni
          </Radio>
          <Radio value={Level.Hard} onCheck={() => setLevel(Level.Hard)}>
            Trudny
          </Radio>
          <Radio value={Level.Legendary} onCheck={() => setLevel(Level.Legendary)}>
            Legendarny
          </Radio>
        </RadioGroup>
        <RadioGroup title="Kolejność" value={order}>
          <Radio value={Order.Clicks} onCheck={() => setOrder(Order.Clicks)}>
            Kliknięcia
          </Radio>
          <Radio value={Order.Time} onCheck={() => setOrder(Order.Time)}>
            Czas
          </Radio>
        </RadioGroup>
        <RadioGroup title="Użytkownicy" value={users}>
          <Radio value={Users.Together} onCheck={() => setUsers(Users.Together)}>
            Razem
          </Radio>
          <Radio value={Users.OnlyMe} onCheck={() => setUsers(Users.OnlyMe)}>
            Tylko ja
          </Radio>
          <Radio value={Users.OnlyFollowings} onCheck={() => setUsers(Users.OnlyFollowings)}>
            Tylko obserwowani
          </Radio>
        </RadioGroup>
      </Panel>
    </>
  );
};

export default RankingPage;
