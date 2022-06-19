import API, { QUERY } from 'api';
import { useMutation, useQueryClient } from 'react-query';

import { useAuth } from 'auth';

import NavbarLink from './components/NavbarLink';
import NavbarLogo from './components/NavbarLogo';
import NavbarUser from './components/NavbarUser';

const Navbar = () => {
  const queryClient = useQueryClient();
  const { mutate: logout } = useMutation(API.logout, {
    onSuccess: () => queryClient.setQueryData(QUERY.CURRENT_USER, () => undefined),
  });

  const { user } = useAuth();
  return (
    <header className="border-gray border-b h-12 px-32">
      <nav className="flex flex-row justify-between h-full">
        <div className="flex flex-row">
          <NavbarLogo />
          <ul className="flex flex-row">
            {user && (
              <>
                <NavbarLink href="/game">Gra</NavbarLink>
                <NavbarLink href="/ranking">Ranking</NavbarLink>
              </>
            )}
            <NavbarLink href="/settings">Ustawienia</NavbarLink>
            <NavbarLink href="/faq">FAQ</NavbarLink>
          </ul>
        </div>
        {user && (
          <ul className="flex flex-row">
            <NavbarUser user={user} />
            <button className="px-4 h-full highlight" onClick={() => logout()}>
              Wyloguj
            </button>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
