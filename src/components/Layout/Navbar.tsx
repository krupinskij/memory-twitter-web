import { useMutation, useQueryClient } from 'react-query';

import API, { QUERY } from 'api';
import { useAuth } from 'auth';

import NavbarLogo from './components/NavbarLogo';
import NavbarUser from './components/NavbarUser';

const Navbar = () => {
  const queryClient = useQueryClient();
  const { mutate: logout } = useMutation(API.logout, {
    onSuccess: () => queryClient.setQueryData(QUERY.CURRENT_USER, () => undefined),
  });

  const { user } = useAuth();
  return (
    <header className="border-green-white border-b h-[48px] px-16 fixed bg-white w-full top-0">
      <nav className="flex flex-row justify-between h-full">
        <div className="flex flex-row">
          <NavbarLogo />
        </div>
        {user && (
          <ul className="flex flex-row">
            <NavbarUser user={user} />
            <button className="px-4 h-full hover:bg-snow-drift" onClick={() => logout()}>
              Wyloguj
            </button>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
