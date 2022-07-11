import React from 'react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

type LinkButtonProps = {
  variant?: 'contained' | 'outlined';
  size?: 'medium' | 'large';
  href: string;
  children: React.ReactNode;
  icon: IconType;
  short: boolean;
};

const LinkButton = ({
  variant = 'contained',
  size = 'medium',
  href,
  children,
  short,
  icon: Icon,
}: LinkButtonProps) => {
  if (short) {
    return (
      <Link
        to={href}
        className={`
          rounded-full font-bold border-2 border-primary py-2 flex justify-center
          ${variant} contained:bg-primary contained:text-white outlined:bg-white
          ${size} large:p-4 large:text-lg
        `}
      >
        <Icon className="w-6 h-6" />
      </Link>
    );
  }
  return (
    <Link
      to={href}
      className={`
        rounded-full font-bold border-2 border-primary py-2
        ${variant} contained:bg-primary contained:text-white outlined:bg-white
        ${size} medium:px-4 large:px-20 large:py-4 large:text-lg
      `}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
