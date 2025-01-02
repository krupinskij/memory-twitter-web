import { Link } from 'react-router-dom';

import Logo from 'assets/icons/logo.svg';

const NavbarLogo = () => {
  return (
    <Link
      to="/"
      className="px-4 flex flex-row gap-2 items-center tracking-wide hover:bg-shadowSecondary"
    >
      <div className="w-6">
        <Logo />
      </div>
      <span className="text-text text-lg font-bold">Memory&nbsp;Twitter</span>
    </Link>
  );
};

export default NavbarLogo;
