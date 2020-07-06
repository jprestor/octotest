import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { MainCol } from '../../row';
import { FirstGallery } from '../../gallery';

import './first-static.scss';

const FirstStatic: React.FC<any> = ({ title, content }) => {
  return (
    <section className="first-static">
      <div className="container">
        <h2 className="title">{title}</h2>

        <MainCol content={content} className="first-static__main-col" />
        <FirstGallery />
      </div>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  const { title, content } = state.data.static_blocks[0];

  return { title, content };
};

export default connect(mapStateToProps)(FirstStatic);
