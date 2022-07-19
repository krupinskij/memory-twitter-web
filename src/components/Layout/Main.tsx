import React from 'react';
import { useMatch, useResolvedPath } from 'react-router-dom';

import useWide from 'hooks/useWide';

type MainProps = {
  children: React.ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => {
  const resolvedHome = useResolvedPath('/');
  const matchHome = useMatch({ path: resolvedHome.pathname, end: true });

  const isWide = useWide();

  if (matchHome) {
    return (
      <div className="bg-background">
        <div className="ml-[25vw] pt-20 bg-background border-l-1 border-l-border min-h-screen">
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className="bg-background">
      <div
        className={`${
          isWide ? 'mx-[10vw]' : 'mx-[25vw]'
        } pt-20 border-x-1 border-x-border min-h-screen`}
      >
        {children}
      </div>
    </div>
  );
};

export default Main;
