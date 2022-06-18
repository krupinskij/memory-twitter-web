import React from 'react';

type MainProps = {
  children: React.ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className="mt-4 mb-4">
      <div className="mx-36">{children}</div>
    </main>
  );
};

export default Main;
