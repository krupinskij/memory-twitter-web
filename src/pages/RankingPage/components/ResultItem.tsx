import { BsHandIndex, BsStopwatch, BsStar } from 'react-icons/bs';

import { Timer } from 'hooks/useTimer';
import { Result } from 'model';
import { format } from 'utils/date';
import { formatProfilePicture } from 'utils/profilePicture';

type ResultItemProps = Omit<Result, 'id'> & {
  pos: number;
  isFirst: boolean;
  isLast: boolean;
};

const ResultItem = ({ user, time, clicks, createdAt, pos, isFirst, isLast }: ResultItemProps) => {
  const timer = new Timer(time);
  return (
    <div
      className={`
      grid grid-cols-[72px_1fr] relative 
      before:absolute before:top-0 before:bottom-1/2 before:left-[78px] 
      ${isFirst ? 'before:w-0' : 'before:w-[2px]'} before:bg-borderSecondary
      after:absolute after:top-1/2 after:bottom-0 after:left-[78px] 
      ${isLast ? 'after:w-0' : 'after:w-[2px]'} after:bg-borderSecondary
       px-12 py-3 hover:bg-shadow
    `}
    >
      <a href={`https://twitter.com/${user.un}`} target="_blank" className="z-10">
        <img
          src={formatProfilePicture(user.pp, '_bigger')}
          alt={user.nm}
          className="w-16 h-16 rounded-full border-4 border-background"
        />
      </a>
      <div className="p-1">
        <div className="mt-1 mb-3">
          <span className="font-semibold">
            <a href={`https://twitter.com/${user.un}`} target="_blank">
              {user.nm}
            </a>
          </span>{' '}
          <span className="text-textSecondary">
            <a href={`https://twitter.com/${user.un}`} target="_blank">
              @{user.un}
            </a>{' '}
            · {format(createdAt)}
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
