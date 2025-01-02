import { motion } from 'framer-motion';
import { useEffect } from 'react';

import LogoSingle from 'assets/icons/logo_single.svg';
import useCardAnimation from 'hooks/useCardAnimation';
import { Card as CardT, CardType, Level } from 'model';
import { areCardsEqual } from 'utils/cards';
import { formatProfilePicture } from 'utils/profilePicture';
import { toHideCard$, queueCard$, toRemoveCard$ } from 'utils/queues';

type CardProps = {
  card: CardT;
  level: Level;
  delay: number;
};

const Card = ({ card, level, delay }: CardProps) => {
  const { controls, animation, isHidden, isBlocked } = useCardAnimation();

  const handleClick = async () => {
    if (isBlocked) return;

    queueCard$.next(card);
    if (isHidden) {
      await animation.show();
    } else {
      await animation.hide();
    }
  };

  useEffect(() => {
    animation.display(delay);

    const hideSubscription = toHideCard$.subscribe(([card1, card2]) => {
      if (areCardsEqual(card, card1) || areCardsEqual(card, card2)) {
        animation.hide();
      }
    });
    const removeSubscription = toRemoveCard$.subscribe(([card1, card2]) => {
      if (areCardsEqual(card, card1) || areCardsEqual(card, card2)) {
        animation.remove();
      }
    });

    return () => {
      hideSubscription.unsubscribe();
      removeSubscription.unsubscribe();
    };
  }, [card, animation]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={controls}
      className={`
        aspect-square m-1 p-1 rounded-lg border-1 border-border bg-background
        flex justify-center items-center
        select-none ${isBlocked ? 'cursor-auto' : 'cursor-pointer'}
      `}
      onClick={handleClick}
    >
      <div className="aspect-square relative flex justify-center items-center max-w-full max-h-full w-full h-full">
        {isHidden ? (
          //@ts-ignore
          <LogoSingle className="rounded w-[inherit]" />
        ) : card.type === CardType.Picture ? (
          <img src={formatProfilePicture(card.data, '_200x200')} alt="user" className="rounded" />
        ) : (
          <span
            className={`text-center font-bold word-break text-card ${level} legendary:text-cardSmall`}
          >
            {card.data}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
