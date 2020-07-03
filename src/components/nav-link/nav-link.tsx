import React from 'react';

import { Link, animateScroll as scroll } from 'react-scroll';

interface Props {
  target: string;
  children: string;
}

export const NavLink: React.FC<Props> = ({ target, children }) => {
  return (
    <Link
      className="nav-link"
      to={target}
      spy={true}
      smooth={true}
      offset={-20}
      duration={500}
    >
      {children}
    </Link>
  );
};
