import NavbarLogo from './components/NavbarLogo';

const Navbar = () => {
  return (
    <header className="border-border border-b h-12 fixed bg-background w-full top-0">
      <nav className="flex flex-row lg:justify-center h-full w-[20vw]">
        <NavbarLogo />
      </nav>
    </header>
  );
};

export default Navbar;
