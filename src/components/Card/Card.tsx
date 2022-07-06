import { motion, useAnimation, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

import logo from 'assets/images/logo_single.png';
import { Card as CardT, CardType, Level } from 'model';

type CardProps = {
  card: CardT;
  level: Level;
};

const Card = ({ card, level }: CardProps) => {
  const [hidden, setHidden] = useState(true);

  const controls = useAnimation();
  const variants: Variants = {
    hidden: { opacity: 0 },
    openstart: { scaleX: [1, 0.01], transition: { duration: 0.5 } },
    openend: { scaleX: [0.01, 1], transition: { duration: 0.5 } },
    closestart: { scaleX: [1, 0.01], transition: { duration: 0.5 } },
    closeend: { scaleX: [0.01, 1], transition: { duration: 0.5 } },
  };

  const handleClick = async () => {
    if (hidden) {
      await controls.start('openstart');
      setHidden(false);
      await controls.start('openend');
    } else {
      await controls.start('closestart');
      setHidden(true);
      await controls.start('closeend');
    }
  };

  useEffect(() => {
    controls.start(() => ({
      opacity: [0, 1, 0.7, 1],
      transition: { delay: card.delay },
    }));
  }, []);

  return (
    <motion.div
      layout
      initial="hidden"
      custom={Math.random()}
      animate={controls}
      variants={variants}
      className="
		aspect-square m-1 p-1 rounded-lg border-1 border-gray bg-white
		flex justify-center items-center
		select-none cursor-pointer
    "
      onClick={handleClick}
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
    </motion.div>
  );
};

export default Card;
