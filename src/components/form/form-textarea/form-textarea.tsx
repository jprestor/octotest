import React, { Fragment } from 'react';

import { useField } from 'formik';

const FormTextarea: React.FC<any> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form__field">
      <textarea
        className={
          meta.touched && meta.error
            ? 'form__textarea form__textarea--error'
            : 'form__textarea'
        }
        {...field}
        {...props}
      />
      <label className="form__label" htmlFor={props.id || props.name}>
        {label}
      </label>

      {meta.touched && meta.error ? (
        <div className="form__field-error form__field-error--textarea">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export { FormTextarea };
