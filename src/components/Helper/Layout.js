import styled from 'styled-components';

export const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(10)};
`;

export const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: ${p => p.theme.spacing(5)};
  background-color: ${p => p.theme.colors.blue};
  box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -webkit-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -moz-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
`;

export const MainBox = styled.main`
  padding: 0 ${p => p.theme.spacing(5)};
`;

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(10)};
  padding: ${p => p.theme.spacing(20)} ${p => p.theme.spacing(4)};
`;

export const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.lg};
  box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -webkit-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -moz-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  padding: ${p => p.theme.spacing(10)};
`;
