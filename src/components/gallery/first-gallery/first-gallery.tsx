import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { withGallery } from '../../hoc';

const FirstGallery: React.FC<any> = ({ galleryItems }) => {
  return <div className="gallery  gallery--second">{galleryItems}</div>;
};

const mapStateToProps = (state: any) => {
  const images = state.data.static_blocks[0];
  let items: any = [];

  for (let key in images) {
    if (key.includes('image')) {
      items.push(images[key]);
    }
  }

  return {
    items,
  };
};

export default compose<React.ComponentType<{}>>(
  connect(mapStateToProps),
  withGallery()
)(FirstGallery);
