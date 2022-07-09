import React from 'react';

type MainProps = {
  children: React.ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div className="mx-[20vw] pt-20 border-x-1 border-x-GREEN_WHITE min-h-screen">{children}</div>
  );
};

export default Main;
