import React from 'react';

type CheckboxGroupProps = {
  children: React.ReactNode;
};

const CheckboxGroup = ({ children }: CheckboxGroupProps) => {
  return (
    <div className="py-4 px-6 bg-shadow w-full rounded-2xl flex flex-col gap-6">{children}</div>
  );
};

export default CheckboxGroup;
