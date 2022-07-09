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
  BsDoorOpen,
  BsDoorOpenFill,
} from 'react-icons/bs';

import RouteLink from './components/RouteLink';

const Sidebar = () => {
  return (
    <div className="fixed top-12 my-6 left-16">
      <div>
        <RouteLink icon={BsGrid3X3Gap} activeIcon={BsGrid3X3GapFill} label="Gra" href="game" />
        <RouteLink icon={BsTrophy} activeIcon={BsTrophyFill} label="Ranking" href="ranking" />
        <RouteLink icon={BsGear} activeIcon={BsGearFill} label="Ustawienia" href="settings" />
        <RouteLink icon={BsPalette} activeIcon={BsPaletteFill} label="Wygląd" href="layout" />
        <RouteLink
          icon={BsQuestionCircle}
          activeIcon={BsQuestionCircleFill}
          label="FAQ"
          href="faq"
        />
        <RouteLink
          icon={BsDoorOpen}
          activeIcon={BsDoorOpenFill}
          label="Wyloguj się"
          href="logout"
        />
      </div>
    </div>
  );
};

export default Sidebar;
