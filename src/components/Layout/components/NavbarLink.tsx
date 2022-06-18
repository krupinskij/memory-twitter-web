import React from 'react';
import { Link } from 'react-router-dom';

type NavbarLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavbarLink = ({ href, children }: NavbarLinkProps) => {
  return (
    <li>
      <Link
        to={href}
        className="text-base font-normal p-4 h-full flex flex-row items-center highlight"
      >
        <span className="block leading-md">{children}</span>
      </Link>
    </li>
  );
};

export default NavbarLink;
