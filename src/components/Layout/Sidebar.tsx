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

import { useAuth } from 'auth';
import useWide from 'hooks/useWide';

import MenuLink from './components/MenuLink';
import MenuUser from './components/MenuUser';

const Sidebar = () => {
  const { user } = useAuth();
  const isWide = useWide();

  return (
    <div
      className={`fixed top-12 ${
        isWide ? 'w-[10vw]' : 'w-[20vw]'
      } h-[calc(100vh-3rem)] flex flex-col items-center justify-between pt-8 overflow-y-auto`}
    >
      <div>
        <MenuLink icon={BsHouse} activeIcon={BsHouseFill} label="Główna" href="/" short={isWide} />
        {user && (
          <>
            <MenuLink
              icon={BsGrid3X3Gap}
              activeIcon={BsGrid3X3GapFill}
              label="Gra"
              href="/game"
              subhref="/game/:label"
              short={isWide}
            />
            <MenuLink
              icon={BsTrophy}
              activeIcon={BsTrophyFill}
              label="Ranking"
              href="/ranking"
              short={isWide}
            />
          </>
        )}
        <MenuLink
          icon={BsGear}
          activeIcon={BsGearFill}
          label="Ustawienia"
          href="/settings"
          short={isWide}
        />
        <MenuLink
          icon={BsPalette}
          activeIcon={BsPaletteFill}
          label="Wygląd"
          href="/display"
          short={isWide}
        />
        <MenuLink
          icon={BsQuestionCircle}
          activeIcon={BsQuestionCircleFill}
          label="FAQ"
          href="/faq"
          short={isWide}
        />
      </div>
      {user && (
        <div className="mt-auto">
          <MenuUser user={user} short={isWide} />
        </div>
      )}
      <div
        className={`text-center py-2 text-carbon-grey mt-2 ${
          isWide ? 'w-[10vw]' : 'w-[20vw]'
        } text-xs`}
      >
        Memory Twitter@2022
      </div>
    </div>
  );
};

export default Sidebar;
