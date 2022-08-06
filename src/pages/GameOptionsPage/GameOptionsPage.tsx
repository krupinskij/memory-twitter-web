import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router';

import API, { QUERY } from 'api';
import Button from 'components/Button';
import { Spinner } from 'components/Loading';
import Radio, { RadioGroup } from 'components/Radio';
import { Level } from 'model';
import { useNotification } from 'providers/NotificationProvider';

const GameOptionsPage = () => {
  const [level, setLevel] = useState<Level | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const { t } = useTranslation();
  const { send } = useNotification();

  const { data: availableLevels = new Set(), isLoading } = useQuery(QUERY.LEVELS, API.getLevels, {
    select: (data) => new Set(data),
    onSuccess: (data) => {
      setLevel((level) => {
        if (!level) return data.size > 0 ? Level.Easy : null;
        if (!data.has(level)) return null;

        return level;
      });
    },
  });

  useEffect(() => {
    const error = (location.state as any)?.error;
    if (error) {
      send(error);
      delete (location.state as any)?.error;
    }
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">{t('gameoptions:title')}</h1>
      <div className="flex flex-col gap-4 items-center m-6">
        <RadioGroup value={level}>
          {Object.values(Level).map((level) => (
            <Radio
              key={level}
              value={level}
              disabled={!availableLevels.has(level)}
              onCheck={() => setLevel(level)}
            >
              {t(`gameoptions:${level}`)}
            </Radio>
          ))}
        </RadioGroup>
        <Button size="large" disabled={!level} onClick={() => navigate(`/game/${level}`)}>
          {t('gameoptions:play')}
        </Button>
      </div>
    </div>
  );
};

export default GameOptionsPage;
