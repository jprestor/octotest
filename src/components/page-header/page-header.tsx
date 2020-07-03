import React, { useRef } from 'react';

import { NavLink } from '../nav-link';

import './page-header.scss';

const PageHeader: React.FC = () => {
  return (
    <header className="page-header">
      <div className="container">
        <ul className="nav">
          <li className="nav-item">
            <img src="" alt="" />
          </li>
          <li className="nav-item">
            <NavLink target="textBlock1">Текстовые блоки</NavLink>
          </li>
          <li className="nav-item">
            <NavLink target="textBlock1">Галерея</NavLink>
          </li>
          <li className="nav-item">
            <NavLink target="textBlock1">👋 Форма с приветами</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export { PageHeader };
