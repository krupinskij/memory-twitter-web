import logo from 'assets/images/logo.png';
import Button from 'components/Button';

const HomePage = () => {
  return (
    <div className="flex flex-row gap-12 mt-24">
      <img src={logo} alt="logo" className="w-[30%] self-center hidden lg:block" />
      <div className="mt-auto mb-6">
        <h1 className="text-6xl lg:text-title font-bold mb-8">Witaj w Memory Twitter!</h1>
        <h2 className="text-2xl lg:text-subtitle mb-4">
          Wygląda na to, że nie jesteś jeszcze zalogowany
        </h2>
        <Button onClick={() => {}}>Zaloguj się używając Twittera</Button>
      </div>
    </div>
  );
};

export default HomePage;
