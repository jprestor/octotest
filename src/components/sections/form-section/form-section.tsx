import React from 'react';

import { Form } from '../../form';

import './form-section.scss';

const FormSection: React.FC<any> = () => {
  return (
    <section className="form-section">
      <div className="form-section__container container">
        <h2 className="form-section__title title title--bigger">
          Форма с приветами
        </h2>

        <Form className="form-section__form" />
      </div>
    </section>
  );
};

export { FormSection };
