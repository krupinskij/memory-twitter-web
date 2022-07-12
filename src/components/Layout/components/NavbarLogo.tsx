import { Link } from 'react-router-dom';

import logo from 'assets/images/logo.png';

const NavbarLogo = () => {
  return (
    <Link
      to="/"
      className="px-4 flex flex-row gap-2 items-center tracking-wide hover:bg-shadowSecondary"
    >
      <img src={logo} alt="logo" className="w-6" />
      <span className="text-text text-lg font-bold">Memory&nbsp;Twitter</span>
    </Link>
  );
};

export default NavbarLogo;
