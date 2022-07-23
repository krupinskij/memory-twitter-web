import { RangeValue } from '../model';

type DotProps<T extends RangeValue> = {
  label: string;
  value: T;
  selected: boolean;
  onSelect: (value: T) => void;
};

function Dot<T extends RangeValue>({ label, value, selected, onSelect }: DotProps<T>) {
  return (
    <div className="relative cursor-pointer" onClick={() => onSelect(value)}>
      <div
        className={`
          ${selected ? 'scale-125 ring-8' : ''} hover:ring-8 ring-primary/20 
          h-3 w-3 rounded-full bg-primary relative z-20 shadow-lg
        `}
      />
      <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap">{label}</div>
    </div>
  );
}

export default Dot;
