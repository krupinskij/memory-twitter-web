import { useQuery } from 'react-query';

import API, { QUERY } from 'api';
import logo from 'assets/images/logo.png';
import { useAuth } from 'auth';
import Button, { LinkButton } from 'components/Button';
import Spacer from 'components/Layout/Spacer';

const HomePage = () => {
  const { refetch: authenticate } = useQuery(QUERY.AUTHENTICATE, API.authenticate);
  const { user } = useAuth();

  const handleAuthenticate = async () => {
    const { data } = await authenticate();
    if (data) window.location.href = data?.url;
  };

  return (
    <div className="flex gap-12 mt-24 mx-12">
      <img src={logo} alt="logo" className="w-[30%] self-center hidden lg:block" />
      <div className="mt-auto mb-6">
        <h1 className="text-6xl lg:text-title font-bold mb-8">Witaj w Memory Twitter!</h1>
        {user ? (
          <>
            <h2 className="text-2xl lg:text-subtitle mb-4">
              Kliknij poniżej by zagrać lub sprawdzić wyniki twoich followersów:
            </h2>
            <Spacer>
              <LinkButton href="/game">Kliknij by zagrać</LinkButton>
              <LinkButton href="/ranking" variant="outlined">
                Sprawdź ranking
              </LinkButton>
            </Spacer>
          </>
        ) : (
          <>
            <h2 className="text-2xl lg:text-subtitle mb-4">
              Wygląda na to, że nie jesteś jeszcze zalogowany
            </h2>
            <Button onClick={handleAuthenticate}>Zaloguj się używając Twittera</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
