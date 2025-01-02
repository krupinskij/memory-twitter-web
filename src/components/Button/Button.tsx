import React from 'react';

import Oval from 'assets/icons/oval.svg';

type ButtonProps = {
  variant?: 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const Button = ({
  variant = 'contained',
  size = 'medium',
  disabled,
  loading,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`rounded-full font-bold border-2 border-primary py-2 flex
        ${variant} contained:bg-primary contained:text-textContained outlined:bg-background
        ${size}  medium:px-4 large:px-20 large:text-lg
        ${
          disabled || loading
            ? 'cursor-not-allowed border-borderSecondary contained:bg-borderSecondary'
            : ''
        }
      `}
      onClick={disabled || loading ? () => {} : onClick}
    >
      {loading && (
        <div className="w-6 mr-2">
          <Oval />
        </div>
      )}
      {children}
    </button>
  );
};

export default Button;
