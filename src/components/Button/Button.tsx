import React from 'react';

type ButtonProps = {
  variant?: 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const Button = ({
  variant = 'contained',
  size = 'medium',
  disabled,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`rounded-full font-bold border-2 border-primary py-2
        ${variant} contained:bg-primary contained:text-textContained outlined:bg-background
        ${size}  medium:px-4 large:px-20 large:text-lg
        ${disabled ? 'cursor-not-allowed border-borderSecondary contained:bg-borderSecondary' : ''}
      `}
      onClick={disabled ? () => {} : onClick}
    >
      {children}
    </button>
  );
};

export default Button;
