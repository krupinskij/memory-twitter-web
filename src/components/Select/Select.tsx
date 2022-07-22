import React from 'react';

type SelectProps = {
  value: string | number | readonly string[] | undefined;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
};

const Select = ({ value, onChange, children }: SelectProps) => {
  return (
    <select value={value} onChange={onChange}>
      {children}
    </select>
  );
};

export default Select;
