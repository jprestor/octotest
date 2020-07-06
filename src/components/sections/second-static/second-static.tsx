import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { MainCol } from '../../row';

import './second-static.scss';

const SecondStatic: React.FC<any> = ({ title, content }) => {
  return (
    <section className="second-static">
      <h2 className="title">{title}</h2>

      <MainCol content={content} />

      <p className="second-static__mob-aside">
        Рекламный макет, согласно Ф.Котлеру, развивает связанный процесс
        стратегического планирования. Воздействие на потребителя, пренебрегая
        деталями, настроено позитивно. Медийная связь тормозит BTL.
      </p>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  const { title, content } = state.data.static_blocks[1];

  return { title, content };
};

export default connect(mapStateToProps)(SecondStatic);
