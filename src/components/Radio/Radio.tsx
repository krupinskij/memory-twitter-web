import React, { useContext } from 'react';

import { RadioContext } from './RadioGroup';

type RadioProps = {
  value: unknown;
  children: React.ReactNode;
  disabled?: boolean;
  onCheck: () => void;
};

const Radio = ({ value, disabled, children, onCheck }: RadioProps) => {
  const currValue = useContext(RadioContext);
  const checked = value === currValue;
  return (
    <div
      className={`
        flex items-center gap-4 border-2 
        ${checked ? 'border-primary' : 'border-borderSecondary'} 
        rounded px-8 py-4 cursor-pointer bg-background min-w-max
        ${disabled ? 'cursor-not-allowed' : ''}
      `}
      onClick={disabled ? () => {} : onCheck}
    >
      <div
        className={`
          h-[20px] min-h-[20px] w-[20px] min-w-[20px] rounded-full border-2 
          ${checked ? 'checked' : 'border-borderSecondary'}
        `}
      />
      <span className={`text-base font-bold ${disabled ? 'text-borderSecondary' : ''}`}>
        {children}
      </span>
    </div>
  );
};

export default Radio;
