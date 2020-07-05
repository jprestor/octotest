import React from 'react';

import { useField } from 'formik';

const FormCheckbox: React.FC<any> = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <label className="form__checkbox">
        <input type="form__checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="form__field-error">{meta.error}</div>
      ) : null}
    </>
  );
};

export { FormCheckbox };
