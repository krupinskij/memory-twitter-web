import React from 'react';

type RadioGroupProps = {
  value: unknown;
  children: React.ReactElement | React.ReactElement[];
};

const RadioGroup = ({ value, children }: RadioGroupProps) => {
  const radioChildren = React.Children.map(children, (child) =>
    React.cloneElement(child, { checked: value === child.props.value })
  );
  return <div className="flex gap-2 px-4 py-2 bg-shadow w-max rounded-2xl">{radioChildren}</div>;
};

export default RadioGroup;
