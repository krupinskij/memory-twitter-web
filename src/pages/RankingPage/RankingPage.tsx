import { useState, useRef, useCallback, useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';

import API, { QUERY } from 'api';
import { Level, Order, Result, Users } from 'model';

import Panel from './components/Panel';
import Radio from './components/Radio';
import RadioGroup from './components/RadioGroup';
import ResultItem from './components/ResultItem';

const RankingPage = () => {
  const [level, setLevel] = useState(Level.Easy);
  const [order, setOrder] = useState(Order.Clicks);
  const [users, setUsers] = useState(Users.Together);

  const observerElem = useRef<HTMLDivElement>(null);

  const {
    data: resInifinite,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<Result[], unknown, Result[], [string, Level, Order, Users]>(
    [QUERY.RESULTS, level, order, users],
    ({ queryKey: [_, level, order, users], pageParam }) =>
      API.getResults(level, order, users, pageParam),
    {
      getNextPageParam: (lastPage) => {
        const lastItem = lastPage[lastPage.length - 1];
        return lastPage.length !== 0 ? lastItem.id : undefined;
      },
    }
  );

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;

      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    const element = observerElem.current;
    if (!element) return;

    const option = { threshold: 0 };
    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);

    return () => observer.unobserve(element);
  }, [fetchNextPage, hasNextPage, handleObserver]);

  const items = resInifinite?.pages.flatMap((page) => page);

  return (
    <>
      <div className="mx-[0vw]">
        {items ? (
          <>
            {items.map((result, idx) => (
              <ResultItem
                key={result.id}
                {...result}
                pos={idx + 1}
                isFirst={idx === 0}
                isLast={items.length === idx + 1}
              />
            ))}
            <div className="loader" ref={observerElem}>
              {isFetchingNextPage && hasNextPage && 'Loading...'}
            </div>
          </>
        ) : (
          <div>Error</div>
        )}
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
