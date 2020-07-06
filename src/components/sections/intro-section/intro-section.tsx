import React from 'react';
import { connect } from 'react-redux';

import { Row, MainCol } from '../../row';
import { CopyField } from '../../copy-field';

import './intro-section.scss';

const IntroSection: React.FC<any> = ({ title, content }) => {
  return (
    <section className="intro-section">
      <div className="container">
        <h1 className="title  title--main">{title}</h1>

        <Row
          main={<MainCol content={content} />}
          aside="Этот блок с описанием тоже нужно сверстать. Специально использовали
            разные стили и текстовые блоки, даже если они порой неуместны ;)"
        />

        <div className="intro-section__copy">
          <p className="intro-section__copy-caption">
            текстовые блоки и изображения для галереи
          </p>
          <CopyField
            className="intro-section__copy-field"
            value={'https://test.octweb.ru/api/pages/index/'}
          />
          <p className="intro-section__copy-notice">
            Будет круто, если по клику на желтый блок, соответствующая ссылка
            сразу скопируется в буфер обмена и пользователь получит какое-то
            максимально естественное уведомление что у него теперь в буфере эта
            ссылка.
          </p>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  const { title, content } = state.data;

  return {
    title,
    content,
  };
};

export default connect(mapStateToProps)(IntroSection);
