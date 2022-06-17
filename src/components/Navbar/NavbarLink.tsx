import React from 'react';

type NavbarLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavbarLink = ({ href, children }: NavbarLinkProps) => {
  return (
    <li>
      <a
        href={href}
        className="text-base font-normal p-4 h-full flex flex-row items-center highlight"
      >
        <span className="block leading-md">{children}</span>
      </a>
    </li>
  );
};

export default NavbarLink;
