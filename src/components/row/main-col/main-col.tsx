import React from 'react';

import './main-col.scss';

const MainCol: React.FC<any> = ({ content, className }) => {
  return (
    <div
      className={`main-col ${className ? className : ''}`}
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
};

export { MainCol };
