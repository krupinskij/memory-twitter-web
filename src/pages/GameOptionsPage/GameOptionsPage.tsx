import { useState } from 'react';
import { useNavigate } from 'react-router';

import Button from 'components/Button';
import Radio, { RadioGroup } from 'components/Radio';
import { Level } from 'model';

const GameOptionsPage = () => {
  const [level, setLevel] = useState<Level>(Level.Easy);
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Wybierz poziom</h1>
      <div className="flex flex-col gap-4 items-center m-6">
        <RadioGroup value={level}>
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
        <Button size="large" onClick={() => navigate(`/game/${level}`)}>
          Graj!
        </Button>
      </div>
    </div>
  );
};

export default GameOptionsPage;
