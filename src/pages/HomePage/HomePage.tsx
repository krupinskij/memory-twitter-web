import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import API, { QUERY } from 'api';
import Logo from 'assets/icons/logo.svg';
import { useAuth } from 'auth';
import Button, { LinkButton } from 'components/Button';
import Spacer from 'components/Layout/Spacer';

const HomePage = () => {
  const { refetch: authenticate } = useQuery(QUERY.AUTHENTICATE, API.authenticate);
  const { user } = useAuth();
  const { t } = useTranslation();

  const handleAuthenticate = async () => {
    const { data } = await authenticate();
    if (data) window.location.href = data?.url;
  };

  return (
    <div className="flex gap-12 mt-24 mx-12">
      <div className="w-[30%] self-center hidden lg:!block">
        <Logo />
      </div>
      <div className="mt-auto mb-6">
        <h1 className="text-6xl lg:text-title font-bold mb-8">{t('homepage:greetings')}</h1>
        {user ? (
          <>
            <h2 className="text-2xl lg:text-subtitle mb-4">{t('homepage:logged.message')}</h2>
            <Spacer>
              <LinkButton href="/game">{t('homepage:play')}</LinkButton>
              <LinkButton href="/ranking" variant="outlined">
                {t('homepage:ranking')}
              </LinkButton>
            </Spacer>
          </>
        ) : (
          <>
            <h2 className="text-2xl lg:text-subtitle mb-4">{t('homepage:unlogged.message')}</h2>
            <Button onClick={handleAuthenticate}>{t('homepage:login')}</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
