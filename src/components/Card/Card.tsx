import { useRef, useState } from 'react';

import logo from 'assets/images/logo_single.png';
import { Card as CardT, CardType, Level } from 'model';

type CardProps = {
  card: CardT;
  level: Level;
};

const Card = ({ card, level }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(true);

  const handleClick = () => {
    if (!cardRef.current) return;

    const cardElem = cardRef.current;
    if (cardElem.classList.contains('close-end')) {
      cardElem.classList.remove('close-start', 'close-end', 'open-end');
      cardElem.classList.add('open-start', 'pointer-events-none');
    }

    if (cardElem.classList.contains('open-end')) {
      cardElem.classList.remove('open-start', 'open-end', 'close-end');
      cardElem.classList.add('close-start', 'pointer-events-none');
    }
  };

  const handleTransitionEnd = () => {
    if (!cardRef.current) return;

    const cardElem = cardRef.current;
    if (cardElem.classList.contains('close-end') || cardElem.classList.contains('open-end')) {
      cardElem.classList.remove('pointer-events-none');
    }

    if (cardElem.classList.contains('open-start')) {
      cardElem.classList.remove('close-start', 'close-end', 'open-start');
      cardElem.classList.add('open-end');

      setHidden(false);
    }

    if (cardElem.classList.contains('close-start')) {
      cardElem.classList.remove('open-start', 'open-end', 'close-start');
      cardElem.classList.add('close-end');

      setHidden(true);
    }
  };

  return (
    <div
      className="
		aspect-square m-1 p-1 rounded-lg border-1 border-gray bg-white
		flex justify-center items-center
		select-none cursor-pointer
    card close-end
    "
      onClick={handleClick}
      onTransitionEnd={handleTransitionEnd}
      ref={cardRef}
    >
      <div className="aspect-square relative flex justify-center items-center">
        {hidden ? (
          <img src={logo} alt="logo" width="200" className="rounded" />
        ) : card.type === CardType.Picture ? (
          <img
            src={`https://pbs.twimg.com/profile_images/${card.data.replace('$', '_200x200')}`}
            alt="user"
            className="rounded"
          />
        ) : (
          <span
            className={`text-center font-bold word-break text-card ${level} legendary:text-cardSmall`}
          >
            {card.data}
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;
