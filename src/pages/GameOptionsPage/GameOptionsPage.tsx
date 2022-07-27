import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router';

import Button from 'components/Button';
import Radio, { RadioGroup } from 'components/Radio';
import { Level } from 'model';
import { useNotification } from 'providers/NotificationProvider';

const GameOptionsPage = () => {
  const [level, setLevel] = useState<Level>(Level.Easy);
  const navigate = useNavigate();
  const location = useLocation();

  const { t } = useTranslation();
  const { send } = useNotification();

  useEffect(() => {
    const error = (location.state as any)?.error;
    if (error) {
      send(error);
      delete (location.state as any)?.error;
    }
  }, []);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">{t('gameoptions:title')}</h1>
      <div className="flex flex-col gap-4 items-center m-6">
        <RadioGroup value={level}>
          {Object.values(Level).map((level) => (
            <Radio key={level} value={level} onCheck={() => setLevel(level)}>
              {t(`gameoptions:${level}`)}
            </Radio>
          ))}
        </RadioGroup>
        <Button size="large" onClick={() => navigate(`/game/${level}`)}>
          {t('gameoptions:play')}
        </Button>
      </div>
    </div>
  );
};

export default GameOptionsPage;
