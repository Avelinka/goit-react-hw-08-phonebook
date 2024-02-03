// import { NavLink } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { NavWrap, NavLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavWrap>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </NavWrap>
  );
};
