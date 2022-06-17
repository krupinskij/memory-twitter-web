import logo from 'assets/images/logo.png';

const NavbarLogo = () => {
  return (
    <a href="/" className="px-6 flex flex-row gap-2 items-center tracking-wide">
      <img src={logo} alt="logo" className="w-6" />
      <span className="text-lg font-bold">Memory Twitter</span>
    </a>
  );
};

export default NavbarLogo;
