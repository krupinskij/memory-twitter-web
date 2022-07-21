import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import Button from 'components/Button';
import Radio, { RadioGroup } from 'components/Radio';
import { Level } from 'model';

const GameOptionsPage = () => {
  const [level, setLevel] = useState<Level>(Level.Easy);
  const navigate = useNavigate();

  const { t } = useTranslation();

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
