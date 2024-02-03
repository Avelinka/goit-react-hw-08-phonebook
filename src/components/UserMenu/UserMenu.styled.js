import styled from 'styled-components';

export const UserWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(5)};
`;

export const UserMail = styled.p`
  font-weight: 700;
  font-size: 18px;
  text-shadow: 2px 2px 5px ${p => p.theme.colors.white};
`;

export const UserBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
  width: ${p => p.theme.spacing(40)};
  height: ${p => p.theme.spacing(10)};
  margin: 0 auto;
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.black};
  font-weight: 500;
  font-size: 18px;
  border: none;
  border-radius: ${p => p.theme.radii.md};
  transition: all 300ms linear;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.black};
    color: ${p => p.theme.colors.white};
    font-weight: 700;
    box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.white};
    -webkit-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.white};
    -moz-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.white};
  }
`;
