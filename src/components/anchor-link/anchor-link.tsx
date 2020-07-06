import React from 'react';

import { Link, animateScroll as scroll } from 'react-scroll';

interface Props {
  target: string;
  children: string;
  className?: string;
  offset?: number;
}

const AnchorLink: React.FC<Props> = ({
  target,
  offset = -20,
  children,
  className,
}) => {
  return (
    <Link
      className={className ? className : ''}
      to={target}
      spy={true}
      smooth={true}
      offset={offset}
      duration={500}
    >
      {children}
    </Link>
  );
};

export { AnchorLink };
