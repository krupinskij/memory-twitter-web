import React, { useContext } from 'react';

import { RadioContext } from './RadioGroup';

type RadioCircleProps = {
  value: unknown;
  onCheck: () => void;
};

const RadioCircle = ({ value, onCheck }: RadioCircleProps) => {
  const currValue = useContext(RadioContext);
  const checked = value === currValue;
  return (
    <div
      className={`h-[45px] min-h-[45px] w-[45px] min-w-[45px] rounded-full cursor-pointer justify-self-center ${
        checked ? 'checked' : ''
      } bg-primary`}
      onClick={onCheck}
    />
  );
};

export default RadioCircle;
