import React, { Fragment, Children } from 'react';

import { Scrollbars } from 'react-custom-scrollbars';

import './table.scss';

const Table: React.FC<any> = ({ children, className }) => {
  return (
    <Scrollbars
      className={`${className} table`}
      autoHeight
      autoHeightMax={9999}
      renderTrackHorizontal={() => <div className="track-horizontal" />}
      renderThumbHorizontal={(props) => (
        <div {...props} className="thumb-horizontal" />
      )}
    >
      {children}
    </Scrollbars>
  );
};

export { Table };
