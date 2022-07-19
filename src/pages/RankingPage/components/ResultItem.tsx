import { BsHandIndex, BsStopwatch, BsStar, BsStarFill } from 'react-icons/bs';
import { IoPodiumOutline } from 'react-icons/io5';

import { Timer } from 'hooks/useTimer';
import { Result } from 'model';
import { format } from 'utils/date';

type ResultItemProps = Omit<Result, 'id'> & {
  pos: number;
  isNext: boolean;
};

const ResultItem = ({ user, time, clicks, createdAt, pos, isNext }: ResultItemProps) => {
  const timer = new Timer(time);
  return (
    <div
      className={`
      grid grid-cols-[72px_1fr] h-[100px] relative 
      before:absolute before:top-0 before:bottom-0 before:left-[31px] ${
        isNext ? 'before:w-[2px]' : 'before:w-0'
      } before:bg-borderSecondary
    `}
    >
      <img
        src={`https://pbs.twimg.com/profile_images/${user.pp.replace('$', '_bigger')}`}
        alt={user.nm}
        className="w-16 h-16 rounded-full border-4 border-background z-10"
      />
      <div className="p-1">
        <div className="mb-3">
          <span className="font-semibold">{user.nm}</span>{' '}
          <span className="text-textSecondary">
            @{user.un} · {format(createdAt)}
          </span>
        </div>
        <div className="grid grid-cols-3 h-[30px]">
          <div className="flex items-center gap-4 w-full">
            <BsStar className="w-[24px] h-auto fill-textSecondary" /> #{pos}
          </div>
          <div className="flex items-center gap-4 w-full">
            <BsHandIndex className="w-[20px] h-auto fill-textSecondary" /> {clicks}
          </div>
          <div className="flex items-center gap-4 w-full">
            <BsStopwatch className="w-[20px] h-auto fill-textSecondary" />{' '}
            {timer.timeFormat('%m:%s:%ms')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultItem;
