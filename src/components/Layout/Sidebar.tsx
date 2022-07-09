import {
  BsGear,
  BsGearFill,
  BsGrid3X3Gap,
  BsGrid3X3GapFill,
  BsTrophy,
  BsTrophyFill,
  BsPalette,
  BsPaletteFill,
  BsQuestionCircle,
  BsQuestionCircleFill,
  BsHouse,
  BsHouseFill,
} from 'react-icons/bs';

import RouteLink from './components/RouteLink';

const Sidebar = () => {
  return (
    <>
      <div className="fixed top-12 my-6 left-16">
        <RouteLink icon={BsHouse} activeIcon={BsHouseFill} label="Główna" href="/" />
        <RouteLink icon={BsGrid3X3Gap} activeIcon={BsGrid3X3GapFill} label="Gra" href="/game" />
        <RouteLink icon={BsTrophy} activeIcon={BsTrophyFill} label="Ranking" href="/ranking" />
        <RouteLink icon={BsGear} activeIcon={BsGearFill} label="Ustawienia" href="/settings" />
        <RouteLink icon={BsPalette} activeIcon={BsPaletteFill} label="Wygląd" href="/display" />
        <RouteLink
          icon={BsQuestionCircle}
          activeIcon={BsQuestionCircleFill}
          label="FAQ"
          href="/faq"
        />
      </div>
      <div className="fixed bottom-0 text-center py-2 text-carbon-grey w-[20vw] text-xs">
        Memory Twitter@2022
      </div>
    </>
  );
};

export default Sidebar;
