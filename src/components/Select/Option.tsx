import React from 'react';

type OptionProps = {
  value: string | number | readonly string[] | undefined;
  selected?: boolean;
  onSelect: () => void;
  children: React.ReactNode;
};

const Option = ({ selected, onSelect, children }: OptionProps) => {
  return (
    <div
      className={`text-lg p-2 hover:bg-shadow ${selected ? 'bg-shadow' : ''}`}
      onClick={onSelect}
    >
      {children}
    </div>
  );
};

export default Option;
