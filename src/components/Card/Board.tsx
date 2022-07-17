import { motion } from 'framer-motion';

import useWide from 'hooks/useWide';
import { Level } from 'model';

type BoardProps = {
  level: Level;
  started: boolean;
  children: React.ReactNode;
};

const Board = ({ level, started, children }: BoardProps) => {
  const isWide = useWide();
  return (
    <div
      className={`p-2 w-max ${isWide ? 'max-w-[80vw]' : 'max-w-[60vw]'} rounded bg-shadow ${
        !started && 'pointer-events-none'
      }`}
    >
      <div
        className={`
      grid ${level} max-h-[calc(100vh-9rem)]
      easy:grid-cols-easy easy:grid-rows-easy easy:aspect-easy
      medium:grid-cols-medium medium:grid-rows-medium medium:aspect-medium
      hard:grid-cols-hard hard:grid-rows-hard hard:aspect-hard
      legendary:grid-cols-legendary legendary:grid-rows-legendary legendary:aspect-legendary
  `}
      >
        {children}
      </div>
    </div>
  );
};

export default Board;
