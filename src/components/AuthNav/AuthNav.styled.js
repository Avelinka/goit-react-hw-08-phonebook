import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(5)};
`;

export const AuthLink = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-weight: 700;
  font-size: 18px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus,
  &.active {
    color: ${p => p.theme.colors.white};
    text-shadow: none;
  }
`;
