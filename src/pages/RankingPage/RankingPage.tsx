import { useState, useRef, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInfiniteQuery } from 'react-query';

import API, { QUERY } from 'api';
import { Spinner } from 'components/Loading';
import { Level, Order, Result, Players } from 'model';

import Panel from './components/Panel';
import Radio from './components/Radio';
import RadioGroup from './components/RadioGroup';
import ResultItem from './components/ResultItem';

const RankingPage = () => {
  const { t } = useTranslation();

  const [level, setLevel] = useState(Level.Easy);
  const [order, setOrder] = useState(Order.Clicks);
  const [players, setPlayers] = useState(Players.Together);

  const observerElem = useRef<HTMLDivElement>(null);

  const {
    data: resInifinite,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<Result[], unknown, Result[], [string, Level, Order, Players]>(
    [QUERY.RESULTS, level, order, players],
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
            <div ref={observerElem}>{isFetchingNextPage && hasNextPage && <Spinner />}</div>
          </>
        ) : (
          <Spinner />
        )}
      </div>
      <Panel title={t('ranking:options')}>
        <RadioGroup title={t('ranking:level')} value={level}>
          {Object.values(Level).map((level) => (
            <Radio key={level} value={level} onCheck={() => setLevel(level)}>
              {t(`ranking:${level}`)}
            </Radio>
          ))}
        </RadioGroup>
        <RadioGroup title={t('ranking:order')} value={order}>
          {Object.values(Order).map((order) => (
            <Radio key={order} value={order} onCheck={() => setOrder(order)}>
              {t(`ranking:${order}`)}
            </Radio>
          ))}
        </RadioGroup>
        <RadioGroup title={t('ranking:players')} value={players}>
          {Object.values(Players).map((players) => (
            <Radio key={players} value={players} onCheck={() => setPlayers(players)}>
              {t(`ranking:${players}`)}
            </Radio>
          ))}
        </RadioGroup>
      </Panel>
    </>
  );
};

export default RankingPage;
