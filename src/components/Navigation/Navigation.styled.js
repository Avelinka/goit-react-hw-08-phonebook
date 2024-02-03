import styled from 'styled-components';
import { NavLink as ItemLink } from 'react-router-dom';

export const NavWrap = styled.nav`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(5)};
`;

export const NavLink = styled(ItemLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  /* text-shadow: 1px 1px 2px ${p => p.theme.colors.white}; */
  font-weight: 700;
  font-size: 18px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus,
  &.active {
    color: ${p => p.theme.colors.white};
  }
`;
