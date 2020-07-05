import React, { useState } from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { FormInput } from './form-input';
import { FormCheckbox } from './form-checkbox';
import { FormTextarea } from './form-textarea';

import './form.scss';

// And now we can use these
const SignupForm = () => {
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          email: '',
          message: '',
          checkbox: false, // added for our checkbox
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
          <Form>
            <FormInput
              label="Имя нас не сильно волнует и это поле необязательное"
              name="name"
              type="text"
              placeholder="Ваше имя"
            />
            <FormInput
              label="Для телефона нужна маска для ввода"
              name="phone"
              type="tel"
              placeholder="Телефон"
            />
            <FormInput
              label="Почту нужно валидировать, что пользователь точно указал адекватный и похожий на настоящий адрес"
              name="email"
              type="email"
              placeholder="Электронная почта"
            />
            <FormTextarea
              label="Без сообщения форму отправлять бессмысленно"
              name="message"
              placeholder="Сообщение"
            />
            <FormCheckbox name="checkbox">
              Согласен с правилами обработки моих персональных данных
            </FormCheckbox>

            <button
              className={
                isSubmitting
                  ? 'form__submit-btn form__submit-btn--submitting'
                  : 'form__submit-btn'
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

            {isFormSubmitted && (
              <div className="form__thank-you-msg">
                Письмо для активации аккаунта успешно отправлено на адрес
                электронной почты, который вы указали при регистрации.
              </div>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export { SignupForm };
