type CheckboxProps = {
  checked: boolean;
  onCheck: () => void;
  children: React.ReactNode;
};

const Checkbox = ({ checked, onCheck, children }: CheckboxProps) => {
  return (
    <div
      className={`flex items-center justify-between gap-4 rounded cursor-pointer min-w-max`}
      onClick={onCheck}
    >
      <span className="text-base">{children}</span>
      <div
        className={`h-[20px] min-h-[20px] w-[20px] min-w-[20px] rounded border-2 ${
          checked ? 'checked' : 'border-borderSecondary'
        }`}
      />
    </div>
  );
};

export default Checkbox;
