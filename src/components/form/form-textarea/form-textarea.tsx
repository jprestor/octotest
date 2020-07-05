import React from 'react';

import { useField } from 'formik';

const FormTextarea: React.FC<any> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        className={
          meta.touched && meta.error
            ? 'form__textarea form__textarea--error'
            : 'form__textarea'
        }
        {...field}
        {...props}
      />

      {meta.touched && meta.error ? (
        <div className="form__field-error">{meta.error}</div>
      ) : null}
    </>
  );
};

export { FormTextarea };
