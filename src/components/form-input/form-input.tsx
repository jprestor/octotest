import React from 'react';

const FormInput: React.FC<any> = ({ placeholder, label }: any) => {
  return (
    <label>
      <input className="form__input" placeholder={placeholder} />
      <span>{label}</span>
    </label>
  );
};

export { FormInput };
