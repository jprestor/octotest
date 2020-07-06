import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { MainCol } from '../../row';
import { Table } from '../../table';

import './third-static.scss';

const ThirdStatic: React.FC<any> = ({ title, text, table }) => {
  return (
    <section className="third-static">
      <h2 className="title">{title}</h2>

      <MainCol content={text} className="third-static__main-col content" />

      <Table className="third-static__table">
        <div dangerouslySetInnerHTML={{ __html: table }}></div>
      </Table>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  const { title, content } = state.data.static_blocks[2];

  const reg = /<table.*?>.*?<\/table.*?>/is;
  const table = content.match(reg);
  const text = content.replace(reg, '');

  return { title, text, table };
};

export default connect(mapStateToProps)(ThirdStatic);
