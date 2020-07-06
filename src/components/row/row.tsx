import React from 'react';

import { MainCol } from './main-col';

import './row.scss';

const Row: React.FC<any> = ({ main, aside, stickyAside, className }) => {
  return (
    <div className={`row ${className ? className : ''}`}>
      <div className="row__main">
        {Array.isArray(main) ? React.Children.map(main, (i) => i) : main}
      </div>

      {aside && (
        <div
          className={
            stickyAside ? 'row__aside row__aside--sticky' : 'row__aside'
          }
        >
          {aside}
        </div>
      )}
    </div>
  );
};

export { Row };
