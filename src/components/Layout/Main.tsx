import React from 'react';

type MainProps = {
  children: React.ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className="my-4">
      <div className="mx-[10vw]">{children}</div>
    </main>
  );
};

export default Main;
