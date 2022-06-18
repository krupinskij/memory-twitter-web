import React from 'react';
import { Link } from 'react-router-dom';

type LinkButtonProps = {
  variant?: 'contained' | 'outlined';
  size?: 'medium' | 'large';
  href: string;
  children: React.ReactNode;
};

const LinkButton = ({
  variant = 'contained',
  size = 'medium',
  href,
  children,
}: LinkButtonProps) => {
  return (
    <Link
      to={href}
      className={`
        rounded-full font-bold border-2 border-primary py-2
        ${variant} contained:bg-primary contained:text-white outlined:bg-white
        ${size}  medium:px-4 large:px-20 large:text-lg
      `}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
