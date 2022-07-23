import React from 'react';

import Dot from './components/Dot';
import { RangeValue } from './model';

type RangeProps<T extends RangeValue> = {
  range: { label: string; value: T }[];
  value: T;
  onChange: (value: T) => void;
};

function Range<T extends RangeValue>({ range, value: currentValue, onChange }: RangeProps<T>) {
  const selectedIndex = range.findIndex(({ value }) => value === currentValue);
  const maxIndex = range.length - 1;

  const style = { '--customWidth': `${(selectedIndex / maxIndex) * 100}%` } as React.CSSProperties;

  return (
    <div className="px-4 pt-4 pb-12 bg-shadow w-full rounded-2xl relative">
      <div
        className={`
          absolute right-5 left-5 h-1 top-5 bg-secondary
          before:h-full before:absolute before:top-0 before:left-0 before:bg-primary before:transition-all
          z-20
          before_customWidth
        `}
        style={style}
      />
      <div className="flex justify-between items-center">
        {range.map(({ label, value }) => (
          <Dot label={label} value={value} selected={currentValue === value} onSelect={onChange} />
        ))}
      </div>
    </div>
  );
}

export default Range;
