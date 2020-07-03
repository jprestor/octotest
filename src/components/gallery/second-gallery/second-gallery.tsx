import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { withGallery } from '../../hoc';

const SecondGallery: React.FC<any> = ({ galleryItems }) => {
  return <div className="gallery  gallery--second">{galleryItems}</div>;
};

const mapStateToProps = ({ data }: any) => {
  const items = data.gallery.reverse().map((i: any) => i.image);

  return {
    items,
  };
};

export default compose<React.ComponentType<{}>>(
  connect(mapStateToProps),
  withGallery('202x130')
)(SecondGallery);
