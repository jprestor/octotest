import React from 'react';

import './main-col.scss';

const MainCol: React.FC<any> = ({ content }) => {
  return (
    <div
      className="main-col"
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
};

export { MainCol };
