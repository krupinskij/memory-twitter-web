import React from 'react';
import { useMatch, useResolvedPath } from 'react-router-dom';

type MainProps = {
  children: React.ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => {
  const resolvedHome = useResolvedPath('/');
  const matchHome = useMatch({ path: resolvedHome.pathname, end: true });

  const resolvedHard = useResolvedPath('/game/hard');
  const matchHard = useMatch({ path: resolvedHard.pathname, end: true });
  const resolvedLegendary = useResolvedPath('/game/legendary');
  const matchLegendary = useMatch({ path: resolvedLegendary.pathname, end: true });

  if (matchHome) {
    return (
      <div className="ml-[20vw] pt-20 border-l-1 border-l-green-white min-h-screen">{children}</div>
    );
  }
  if (matchHard || matchLegendary) {
    return (
      <div className="mx-[10vw] pt-20 border-x-1 border-x-green-white min-h-screen">{children}</div>
    );
  }
  return (
    <div className="mx-[20vw] pt-20 border-x-1 border-x-green-white min-h-screen">{children}</div>
  );
};

export default Main;
