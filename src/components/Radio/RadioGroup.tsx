import React, { createContext } from 'react';

export const RadioContext = createContext<unknown>(null);

type RadioGroupProps = {
  value: unknown;
  children: React.ReactElement | React.ReactElement[];
};

const RadioGroup = ({ value, children }: RadioGroupProps) => {
  const radioChildren = React.Children.map(children, (child) =>
    React.cloneElement(child, { checked: value === child.props.value })
  );
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-2 px-4 py-2 bg-shadow w-full rounded-2xl">
      <RadioContext.Provider value={value}>{radioChildren}</RadioContext.Provider>
    </div>
  );
};

export default RadioGroup;
