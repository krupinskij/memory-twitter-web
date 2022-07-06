import React from 'react';

type RadioProps = {
  checked?: boolean;
  value: unknown;
  children: React.ReactNode;
  onCheck: () => void;
};

const Radio = ({ checked, children, onCheck }: RadioProps) => {
  return (
    <div
      className="flex items-center gap-4 border-2 border-primary rounded px-8 py-4 cursor-pointer"
      onClick={onCheck}
    >
      <div
        className={`h-[20px] w-[20px] rounded-full border-2 ${
          checked ? 'checked' : 'border-gray-light'
        }`}
      />
      <span className="text-base font-bold">{children}</span>
    </div>
  );
};

export default Radio;
