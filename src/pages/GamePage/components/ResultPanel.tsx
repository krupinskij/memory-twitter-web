import { useAuth } from 'auth';
import Button, { LinkButton } from 'components/Button';
import { Spacer } from 'components/Layout';
import { Timer } from 'hooks/useTimer';
import { Level } from 'model';

type ResultViewProps = {
  clicks: number;
  time: number;
  level: Level;
};

const ResultPanel = ({ clicks, time, level }: ResultViewProps) => {
  const { user } = useAuth();
  const timer = new Timer(time);

  return (
    <>
      <div className="bg-shadow flex flex-col items-center min-w-[520px] py-12 mb-8 rounded-lg">
        <img
          src={`https://pbs.twimg.com/profile_images/${user?.pp.replace('$', '_200x200')}`}
          alt="avatar"
          className="rounded-full border-8 border-background h-[200px] w-[200px] shadow-[0_0_20px] shadow-shadowTertiary mb-8"
        />
        <p className="font-bold text-4xl mb-2">Ukończyłaś/eś grę</p>
        <p className="text-xl mb-2">
          na poziomie <span className="font-medium">{level}</span>
        </p>
        <p className="text-2xl">
          Wykonałaś/eś <span className="font-medium">{clicks} kliknięcia</span>
        </p>
        <p className="text-2xl">
          w czasie <span className="font-medium">{timer.timeFormat('%m:%s:%ms')}</span>
        </p>
      </div>
      <Spacer>
        <LinkButton variant="outlined" href="/game">
          Zagraj jeszcze raz
        </LinkButton>
        <Button onClick={() => {}}>Udostępnij na twitterze</Button>
      </Spacer>
    </>
  );
};

export default ResultPanel;
