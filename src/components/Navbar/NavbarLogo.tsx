import { Link } from 'react-router-dom';

import logo from 'assets/images/logo.png';

const NavbarLogo = () => {
  return (
    <Link to="/" className="px-6 flex flex-row gap-2 items-center tracking-wide">
      <img src={logo} alt="logo" className="w-6" />
      <span className="text-lg font-bold">Memory Twitter</span>
    </Link>
  );
};

export default NavbarLogo;
