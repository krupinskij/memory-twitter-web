import React, { createContext } from 'react';

export const RadioContext = createContext<unknown>(null);

type RadioGroupProps = {
  value: unknown;
  children: React.ReactNode;
};

const RadioGroup = ({ value, children }: RadioGroupProps) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(1px,1fr))] gap-2 px-4 py-2 bg-shadow w-full rounded-2xl">
      <RadioContext.Provider value={value}>{children}</RadioContext.Provider>
    </div>
  );
};

export default RadioGroup;
