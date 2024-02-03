import { AuthWrap, AuthLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthWrap>
      <AuthLink to="/register">Register</AuthLink>
      <AuthLink to="/login">Log In</AuthLink>
    </AuthWrap>
  );
};
