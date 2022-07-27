import { Trans, useTranslation } from 'react-i18next';

import { useAuth } from 'auth';
import Button, { LinkButton } from 'components/Button';
import { Spacer } from 'components/Layout';
import { Timer } from 'hooks/useTimer';
import { Level } from 'model';
import { formatProfilePicture } from 'utils/profilePicture';

type ResultViewProps = {
  clicks: number;
  time: number;
  level: Level;
};

const ResultPanel = ({ clicks, time, level }: ResultViewProps) => {
  const { user } = useAuth();
  const timer = new Timer(time);
  const timeFormat = timer.timeFormat('%m:%s:%ms');

  const { t } = useTranslation();

  return (
    <>
      <div className="bg-shadow flex flex-col items-center min-w-[520px] py-12 mb-8 rounded-lg">
        <img
          src={formatProfilePicture(user?.pp, '_200x200')}
          alt="avatar"
          className="rounded-full border-8 border-background h-[200px] w-[200px] shadow-[0_0_20px] shadow-shadowTertiary mb-8"
        />
        <p className="font-bold text-4xl mb-2">{t('game:result.title')}</p>
        <p className="text-xl mb-2">
          <Trans i18nKey="game:result.level" context={level}>
            {/*@ts-ignore*/}
            on <span className="font-medium">{{ level }}</span> level.
          </Trans>
        </p>
        <p className="text-2xl">
          <Trans i18nKey="game:result.clicks" count={clicks}>
            {/*@ts-ignore*/}
            You've made <span className="font-medium">{{ clicks }} clicks</span>
          </Trans>
        </p>
        <p className="text-2xl">
          <Trans i18nKey="game:result.time" context={timeFormat}>
            {/*@ts-ignore*/}
            {/*@ts-ignore*/}in <span className="font-medium">{{ time: timeFormat }}</span>.
          </Trans>
        </p>
      </div>
      <Spacer>
        <LinkButton variant="outlined" href="/game">
          {t('game:result.play-again')}
        </LinkButton>
        <Button onClick={() => {}}>{t('game:result.share')}</Button>
      </Spacer>
    </>
  );
};

export default ResultPanel;
