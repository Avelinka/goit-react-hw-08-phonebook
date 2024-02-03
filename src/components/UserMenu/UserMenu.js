import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { UserMail, UserWrap, UserBtn } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserWrap>
      <UserMail>{user.email}</UserMail>
      <UserBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserBtn>
    </UserWrap>
  );
};
