import React from 'react';

type OptionProps = {
  value: string | number | readonly string[] | undefined;
  children: React.ReactNode;
};

const Option = ({ value, children }: OptionProps) => {
  return <option value={value}>{children}</option>;
};

export default Option;
