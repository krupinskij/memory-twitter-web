import Logo from 'assets/icons/logo.svg';

const LogoPlaceholder = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-8 justify-center items-center">
      <div className="w-28">
        <Logo />
      </div>
    </div>
  );
};

export default LogoPlaceholder;
