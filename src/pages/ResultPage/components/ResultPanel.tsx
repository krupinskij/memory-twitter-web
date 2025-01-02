import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';

import API from 'api';
import { useAuth } from 'auth';
import Button, { LinkButton } from 'components/Button';
import { Spacer } from 'components/Layout';
import { Timer } from 'hooks/useTimer';
import { Level } from 'model';
import { useNotification } from 'providers/NotificationProvider';
import { formatProfilePicture } from 'utils/profilePicture';

type ResultViewProps = {
  clicks: number;
  time: number;
  level: Level;
  tweeted: boolean;
  resultId: string;
};

const ResultPanel = ({ clicks, time, level, tweeted, resultId }: ResultViewProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isTweeted, setIsTweeted] = useState(tweeted);

  const { user } = useAuth();
  const timer = new Timer(time);
  const timeFormat = timer.timeFormat('%m:%s:%ms');

  const { t } = useTranslation();
  const { send } = useNotification();

  const { mutate: sendTweet } = useMutation(API.sendTweet, {
    onSuccess: (tweet) => {
      setIsTweeted(true);
      send(
        <Trans i18nKey="result:tweet-success">
          Your tweet has been sent.&nbsp;
          <a
            href={`https://twitter.com/${user?.un}/status/${tweet.id}`}
            target="_blank"
            className="font-bold"
          >
            View.
          </a>
        </Trans>
      );
    },
    onSettled: () => setIsLoading(false),
  });

  const handleSendTweet = () => {
    setIsLoading(true);
    sendTweet(resultId);
  };

  return (
    <>
      <div className="bg-shadow flex flex-col items-center min-w-[520px] py-12 mb-8 rounded-lg">
        <img
          src={formatProfilePicture(user?.pp, '_200x200')}
          alt="avatar"
          className="rounded-full border-8 border-background h-[200px] w-[200px] shadow-[0_0_20px] shadow-shadowTertiary mb-8"
        />
        <p className="font-bold text-4xl mb-2">{t('result:title')}</p>
        <p className="text-xl mb-2">
          <Trans i18nKey="result:level" context={level}>
            {/*@ts-ignore*/}
            on <span className="font-medium">{{ level }}</span> level.
          </Trans>
        </p>
        <p className="text-2xl">
          <Trans i18nKey="result:clicks" count={clicks}>
            {/*@ts-ignore*/}
            You've made <span className="font-medium">{{ clicks }} clicks</span>
          </Trans>
        </p>
        <p className="text-2xl">
          <Trans i18nKey="result:time" context={timeFormat}>
            {/*@ts-ignore*/}
            {/*@ts-ignore*/}in <span className="font-medium">{{ time: timeFormat }}</span>.
          </Trans>
        </p>
      </div>
      <Spacer>
        <LinkButton variant="outlined" href="/game">
          {t('result:play-again')}
        </LinkButton>
        {!isTweeted && (
          <Button loading={isLoading} onClick={handleSendTweet}>
            {t('result:share')}
          </Button>
        )}
      </Spacer>
    </>
  );
};

export default ResultPanel;
