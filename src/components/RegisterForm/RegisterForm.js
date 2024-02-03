import { useDispatch } from 'react-redux';

import { Formik } from 'formik';
import * as Yup from 'yup';

import toast from 'react-hot-toast';
import { register } from '../../redux/auth/operations';
import {
  RegBtn,
  RegError,
  RegField,
  RegForm,
  RegLabel,
} from './RegisterForm.styled';

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я'. -]+$/,
      'Name may contain only letters, apostrophe, dot, dash and spaces. For example Jane Dou'
    )
    .required('Required'),
  email: Yup.string()
    .trim()
    .email('Please enter a valid email! For example jane@mail.com')
    .required('Required'),
  password: Yup.string()
    .trim()
    .min(7, 'Too Short!')
    .matches(
      /^[a-zA-Z0-9]+$/,
      'Password may only contain letters of the English alphabet and numbers.. For example Qwerty1'
    )
    .required('Required'),
});

const defaultValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const onRegisterSubmit = (values, action) => {
    dispatch(register(values))
      .then(() => {
        toast.success('Registration was successful!');
      })
      .catch(error => {
        toast.error('Oops, something went wrong! Try again later.');
        console.error('Registration failed:', error);
      })
      .finally(() => {
        action.resetForm();
      });
  };

  return (
    <Formik
      initialValues={defaultValues}
      onSubmit={onRegisterSubmit}
      validationSchema={registerSchema}
    >
      <RegForm autoComplete="off">
        <RegLabel htmlFor="name">
          Username
          <RegField
            autoComplete="off"
            type="text"
            id="name"
            name="name"
            required
          />
          <RegError name="name" component="span" />
        </RegLabel>
        <RegLabel htmlFor="email">
          Email
          <RegField
            autoComplete="off"
            type="email"
            id="email"
            name="email"
            required
          />
          <RegError name="email" component="span" />
        </RegLabel>
        <RegLabel htmlFor="password">
          Password
          <RegField
            autoComplete="off"
            type="password"
            id="password"
            name="password"
            required
          />
          <RegError name="password" component="span" />
        </RegLabel>
        <RegBtn type="submit">Register</RegBtn>
      </RegForm>
    </Formik>
  );
};
