import { RangeValue } from '../model';

type DotProps<T extends RangeValue> = {
  label: string;
  value: T;
  selected: boolean;
  onSelect: (value: T) => void;
};

const Dot: <T extends RangeValue>(props: DotProps<T>) => React.ReactElement = ({
  label,
  value,
  selected,
  onSelect,
}) => {
  return (
    <div className="relative cursor-pointer">
      <div
        className={`
          ${selected ? 'scale-125 ring-8' : ''} hover:ring-8 ring-primary/20 
          h-3 w-3 rounded-full bg-primary relative z-20 shadow-lg
        `}
        onClick={() => onSelect(value)}
      />
      <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap">{label}</div>
      <div
        className="absolute cursor-pointer top-1/2 left-1/2 w-[50px] h-[70px] -translate-x-1/2 -translate-y-[35%]"
        onClick={() => onSelect(value)}
      />
    </div>
  );
};

export default Dot;
