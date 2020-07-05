import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { Row } from '../../row';
import { CopyField } from '../../copy-field';

import './intro-section.scss';

const IntroSection: React.FC<any> = ({ title, content }) => {
  return (
    <section className="intro-section">
      <h1 className="title  title--main">{title}</h1>

      <Row
        main={content}
        aside="Этот блок с описанием тоже нужно сверстать. Специально использовали
            разные стили и текстовые блоки, даже если они порой неуместны ;)"
        stickyAside
      />

      <div className="intro-section__copy">
        <p className="intro-section__copy-caption">
          текстовые блоки и изображения для галереи
        </p>
        <CopyField />
        <p className="intro-section__copy-notice">
          Будет круто, если по клику на желтый блок, соответствующая ссылка
          сразу скопируется в буфер обмена и пользователь получит какое-то
          максимально естественное уведомление что у него теперь в буфере эта
          ссылка.
        </p>
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
