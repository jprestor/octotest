import React, { Fragment } from 'react';

import { Scrollbars } from 'react-custom-scrollbars';

import './table.scss';

const Table: React.FC = () => {
  return (
    <Scrollbars className="table" autoHeight autoHeightMax={9999}>
      <h2 className="textBlock1">Text block 1</h2>

      <p style={{ width: 983 }}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        aliquet malesuada efficitur. Praesent semper tortor id egestas volutpat.
        Aenean dui sapien, fermentum et dictum sagittis, finibus eget velit.
        Maecenas sed finibus risus, sed hendrerit odio. Nullam volutpat metus
        non enim consequat auctor. Vivamus gravida nibh in tempus vehicula.
        Donec venenatis luctus nulla, id facilisis turpis pharetra aliquet.
        Praesent non orci in turpis dapibus rutrum. Donec venenatis fermentum
        velit sit amet egestas. Duis quis ipsum et arcu scelerisque sagittis.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Aenean suscipit feugiat justo a luctus. Sed placerat
        sapien sit amet risus efficitur, sed pharetra tellus faucibus.", "Nam
        mollis lectus ac mollis aliquet. Pellentesque sed dolor ac leo porttitor
        maximus nec sed velit. Maecenas quis faucibus nisl. Cras vel dignissim
        arcu. Donec in velit condimentum, efficitur velit nec, dignissim odio.
        Sed sapien tortor, facilisis in lacus id, condimentum lobortis nisl.
        Vestibulum porta sollicitudin risus, at tincidunt felis. Pellentesque
        pulvinar ante enim, vitae sagittis est vestibulum accumsan. Phasellus
        lobortis massa ac metus dictum interdum."
      </p>
    </Scrollbars>
  );
};

export { Table };
