import styled from 'styled-components';
import backgroundImage from '../../images/desk1000.jpg';

export const HomeBox = styled.div`
  max-width: 1000px;
  width: 100%;
  /* background-color: ${p => p.theme.colors.white}; */
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: ${p => p.theme.radii.lg};
  box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -webkit-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -moz-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  height: calc(100vh - 160px);
  /* padding: ${p => p.theme.spacing(5)}; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  /* gap: ${p => p.theme.spacing(5)}; */
`;

export const HomeTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  font-style: italic;
  text-shadow: 1px 2px 3px ${p => p.theme.colors.blue};
`;
