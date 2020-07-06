import React, { Fragment } from 'react';

import { useField, Field } from 'formik';
import MaskedInput from 'react-text-mask';

const phoneNumberMask = [
  '+',
  /[1-9]/,
  ' ',
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const Input: React.FC<any> = (props) => {
  const { type } = props;

  if (type === 'tel') {
    return <MaskedInput mask={phoneNumberMask} {...props} />;
  }

  return <input {...props} />;
};

let FormInput: React.FC<any> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form__field">
      <Input
        className={
          meta.touched && meta.error
            ? 'form__input form__input--error'
            : 'form__input'
        }
        {...field}
        {...props}
      />
      <label className="form__label" htmlFor={props.id || props.name}>
        {label}
      </label>

      {meta.touched && meta.error ? (
        <div className="form__field-error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export { FormInput };
