import React, { useContext } from 'react';

import { RadioContext } from './RadioGroup';

type RadioProps = {
  value: unknown;
  onCheck: () => void;
  children: React.ReactNode;
};

const Radio = ({ value, onCheck, children }: RadioProps) => {
  const currValue = useContext(RadioContext);
  const checked = value === currValue;
  return (
    <div className="flex justify-between my-1 cursor-pointer" onClick={onCheck}>
      {children}
      <div
        className={`
          h-[20px] min-h-[20px] w-[20px] min-w-[20px] rounded-full border-2
          ${checked ? 'checked' : 'border-borderSecondary'} 
          
        `}
      />
    </div>
  );
};

export default Radio;
