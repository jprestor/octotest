import React, { useState, Fragment } from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { FormInput } from './form-input';
import { FormCheckbox } from './form-checkbox';
import { FormTextarea } from './form-textarea';

import './form.scss';

const SignupForm: React.FC<any> = ({ className }) => {
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        email: '',
        message: '',
        checkbox: false,
      }}
      validationSchema={Yup.object({
        phone: Yup.string().required('Это обязательное поле'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Это обязательное поле'),
        message: Yup.string().required('Это обязательное поле'),
        checkbox: Yup.boolean()
          .required('Это обязательное поле')
          .oneOf([true], 'Вы должны принять условия'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setFormSubmitted(true);

        setTimeout(() => {
          console.log('submit', JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
        }, 400);
      }}
    >
      {({ isSubmitting, isValid, touched }) => (
        <Form className={`form ${className ? className : ''}`}>
          <FormInput
            label="Имя нас не сильно волнует и это поле необязательное"
            id="name"
            name="name"
            type="text"
            placeholder="Ваше имя"
          />
          <FormInput
            label="Для телефона нужна маска для ввода"
            id="phone"
            name="phone"
            type="tel"
            placeholder="Телефон"
            required
          />
          <FormInput
            label="Почту нужно валидировать, что пользователь точно указал адекватный и похожий на настоящий адрес"
            id="email"
            name="email"
            type="email"
            placeholder="Электронная почта"
          />
          <FormTextarea
            label="Без сообщения форму отправлять бессмысленно"
            id="message"
            name="message"
            placeholder="Сообщение"
          />
          <FormCheckbox name="checkbox">
            Согласен с правилами обработки моих персональных данных
          </FormCheckbox>

          <div className="form__field">
            <button
              className={
                isSubmitting
                  ? 'form__submit-btn form__submit-btn--submitting btn'
                  : 'form__submit-btn btn'
              }
              type="submit"
              disabled={
                isSubmitting || !isValid || !Object.keys(touched).length
                  ? true
                  : false
              } // Если идет форма отправляется/невалидна/пуста, кнопка неактивна
            >
              Отправить сообщение
            </button>

            <label className="form__label">
              У кнопки несколько состояний. Яркой и синей она становится когда
              все нормально и форму можно отправлять.
            </label>
          </div>

          {isFormSubmitted && (
            <div className="form__thank-you-msg">
              Письмо для активации аккаунта успешно отправлено на адрес
              электронной почты, который вы указали при регистрации.
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export { SignupForm };
