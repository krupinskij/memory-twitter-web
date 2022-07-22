import React, { useRef, useState } from 'react';
import { BsCaretDownFill } from 'react-icons/bs';

type SelectProps = {
  label: string;
  value: string | number | readonly string[] | undefined;
  children: React.ReactElement[];
};

const Select = ({ label, value, children }: SelectProps) => {
  const [expanded, setExpanded] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  let selectedChild;

  const optionsChildren = React.Children.map(children, (child: React.ReactElement) => {
    if (child.props.value === value) {
      selectedChild = React.cloneElement(child);
    }

    return React.cloneElement(child, { selected: child.props.value === value });
  });

  const handleExpand = () => {
    setExpanded((expanded) => {
      if (expanded) {
        selectRef.current?.blur();
      } else {
        selectRef.current?.focus();
      }

      return !expanded;
    });
  };

  const handleBlur = () => {
    setExpanded(false);
  };

  return (
    <div
      tabIndex={0}
      ref={selectRef}
      className="border-1 w-full border-borderSecondary focus:border-primary rounded relative focus:rounded-b-none cursor-pointer"
      onClick={handleExpand}
      onBlur={handleBlur}
    >
      <span className="text-sm  text-textSecondary block -mb-1 p-2 pb-0">{label}</span>
      <div className="text-lg pointer-events-none">{selectedChild}</div>
      <BsCaretDownFill
        className={`
        absolute right-4 top-1/2 -translate-y-1/2 h-4 w-auto 
        ${expanded ? 'fill-primary' : 'fill-borderSecondary'}
      `}
      />
      {expanded && (
        <div className="absolute top-full mt-1 w-full max-h-[300px] overflow-y-auto rounded rounded-t-none shadow-xl bg-background">
          {optionsChildren}
        </div>
      )}
    </div>
  );
};

export default Select;
