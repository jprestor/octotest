import React from 'react';

import { FormInput } from '../form-input';

const Form: React.FC<any> = () => {
  return (
    <div className="form">
      <FormInput
        placeholder="Ваше имя"
        label="Имя нас не сильно волнует и это поле необязательное"
      />
      <FormInput
        placeholder="Ваше"
        label="Для телефона нужна маска для ввода"
      />
      <FormInput
        placeholder="Ваше"
        label="Почту нужно валидировать, что пользователь точно указал адекватный и похожий на настоящий адрес"
      />
      <textarea name="" id=""></textarea>
      <input className="checkbox" type="checkbox" />
    </div>
  );
};

export { Form };
