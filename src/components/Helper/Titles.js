import styled from 'styled-components';

export const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(5)};
  margin-bottom: ${p => p.theme.spacing(5)};
`;

export const MainTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 500;
`;
