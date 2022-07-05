import { Level } from 'model';

type BoardProps = {
  level: Level;
  children: React.ReactNode;
};

const Board = ({ level, children }: BoardProps) => {
  return (
    <div className="py-2 px-6 w-max rounded bg-shadow">
      <div
        className={`
      grid ${level} max-h-[75vh] 
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
