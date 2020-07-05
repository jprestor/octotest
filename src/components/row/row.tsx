import React from 'react';

import { MainCol } from './main-col';

import './row.scss';

const Row: React.FC<any> = ({ main, aside, stickyAside }) => {
  return (
    <div className="row">
      <MainCol content={main} />

      {aside && (
        <div
          className={stickyAside ? 'aside-col aside-col--sticky' : 'aside-col'}
        >
          {aside}
        </div>
      )}
    </div>
  );
};

export { Row };
