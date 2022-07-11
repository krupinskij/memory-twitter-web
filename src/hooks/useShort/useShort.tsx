import { useMatch, useResolvedPath } from 'react-router';

const useShort = () => {
  const resolvedHard = useResolvedPath('/game/hard');
  const matchHard = useMatch({ path: resolvedHard.pathname, end: true });
  const resolvedLegendary = useResolvedPath('/game/legendary');
  const matchLegendary = useMatch({ path: resolvedLegendary.pathname, end: true });

  return !!matchHard || !!matchLegendary;
};

export default useShort;
