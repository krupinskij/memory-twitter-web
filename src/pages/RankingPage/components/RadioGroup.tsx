import React, { createContext } from 'react';

export const RadioContext = createContext<unknown>(null);

type RadioGroupProps = {
  title: string;
  value: unknown;
  children: React.ReactNode;
};

const RadioGroup = ({ title, value, children }: RadioGroupProps) => {
  return (
    <div className="px-4 mt-1 mb-4">
      <div className="font-semibold text-base mt-3 mb-1">{title}</div>
      <RadioContext.Provider value={value}>{children}</RadioContext.Provider>
    </div>
  );
};

export default RadioGroup;
