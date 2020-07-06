import React, { Fragment } from 'react';

import { useField } from 'formik';

const FormCheckbox: React.FC<any> = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div className="form__field">
      <label className="form__checkbox-label">
        <input
          className="form__checkbox"
          type="checkbox"
          {...field}
          {...props}
        />

        <span className="form__checkbox-btn"></span>
        <span className="form__checkbox-txt">{children}</span>
      </label>

      <label
        className="form__label form__label--checkbox"
        htmlFor={props.id || props.name}
      >
        Форма отправляется только, если отметка с согласием стоит
      </label>

      {meta.touched && meta.error ? (
        <div className="form__field-error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export { FormCheckbox };
