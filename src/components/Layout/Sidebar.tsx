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
import useShort from 'hooks/useShort';

import MenuLink from './components/MenuLink';
import MenuUser from './components/MenuUser';

const Sidebar = () => {
  const { user } = useAuth();
  const isShort = useShort();

  return (
    <div
      className={`fixed top-12 ${
        isShort ? 'w-[10vw]' : 'w-[20vw]'
      } h-[calc(100vh-3rem)] flex flex-col items-center justify-between pt-10 overflow-y-auto`}
    >
      <div className="">
        <MenuLink icon={BsHouse} activeIcon={BsHouseFill} label="Główna" href="/" short={isShort} />
        {user && (
          <>
            <MenuLink
              icon={BsGrid3X3Gap}
              activeIcon={BsGrid3X3GapFill}
              label="Gra"
              href="/game"
              subhref="/game/:label"
              short={isShort}
            />
            <MenuLink
              icon={BsTrophy}
              activeIcon={BsTrophyFill}
              label="Ranking"
              href="/ranking"
              short={isShort}
            />
          </>
        )}
        <MenuLink
          icon={BsGear}
          activeIcon={BsGearFill}
          label="Ustawienia"
          href="/settings"
          short={isShort}
        />
        <MenuLink
          icon={BsPalette}
          activeIcon={BsPaletteFill}
          label="Wygląd"
          href="/display"
          short={isShort}
        />
        <MenuLink
          icon={BsQuestionCircle}
          activeIcon={BsQuestionCircleFill}
          label="FAQ"
          href="/faq"
          short={isShort}
        />
      </div>
      {user && (
        <div className="mt-auto">
          <MenuUser user={user} short={isShort} />
        </div>
      )}
      <div
        className={`text-center py-2 text-carbon-grey mt-2 ${
          isShort ? 'w-[10vw]' : 'w-[20vw]'
        } text-xs`}
      >
        Memory Twitter@2022
      </div>
    </div>
  );
};

export default Sidebar;
