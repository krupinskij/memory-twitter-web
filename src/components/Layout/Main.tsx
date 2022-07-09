import React from 'react';
import { useMatch, useResolvedPath } from 'react-router-dom';

type MainProps = {
  children: React.ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => {
  const resolved = useResolvedPath('/');
  const match = useMatch({ path: resolved.pathname, end: true });

  if (match) {
    return (
      <div className="ml-[20vw] pt-20 border-l-1 border-l-green-white min-h-screen">{children}</div>
    );
  }
  return (
    <div className="mx-[20vw] pt-20 border-x-1 border-x-green-white min-h-screen">{children}</div>
  );
};

export default Main;
