import React from 'react';

type SpacerProps = {
  children: React.ReactNode;
};

const Spacer = ({ children }: SpacerProps) => <div className="flex gap-2">{children}</div>;

export default Spacer;
