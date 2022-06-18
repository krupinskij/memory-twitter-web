import React from 'react';

type ButtonProps = {
  variant?: 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  onClick: () => void;
  children: React.ReactNode;
};

const Button = ({ variant = 'contained', size = 'medium', children, onClick }: ButtonProps) => {
  return (
    <button
      className={`rounded-full font-bold border-2 border-primary py-2
        ${variant} contained:bg-primary contained:text-white outlined:bg-white
        ${size}  medium:px-4 large:px-20 large:text-lg
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
