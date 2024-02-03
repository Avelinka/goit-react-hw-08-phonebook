import { useDispatch } from 'react-redux';

import { Formik } from 'formik';
import toast from 'react-hot-toast';
import { logIn } from '../../redux/auth/operations';
import {
  LogBtn,
  LogError,
  LogField,
  LogForm,
  LogLabel,
} from './LoginForm.styled';

const defaultValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const onLoginSubmit = (values, action) => {
    dispatch(logIn(values))
      .then(() => {
        toast.success('Login was successful!');
      })
      .catch(error => {
        toast.error('Oops, something went wrong! Try again.');
        console.error('Login failed:', error);
      })
      .finally(() => {
        action.resetForm();
      });
  };

  return (
    <Formik initialValues={defaultValues} onSubmit={onLoginSubmit}>
      <LogForm>
        <LogLabel htmlFor="email">
          Email
          <LogField
            // autoComplete="off"
            type="email"
            id="email"
            name="email"
            required
          />
          <LogError name="email" component="span" />
        </LogLabel>
        <LogLabel htmlFor="password">
          Password
          <LogField
            // autoComplete="off"
            type="password"
            id="password"
            name="password"
            required
          />
          <LogError name="password" component="span" />
        </LogLabel>
        <LogBtn type="submit">Log In</LogBtn>
      </LogForm>
    </Formik>
  );
};
