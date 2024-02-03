import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import { GlobalStyle } from 'components/GlobalStyle';
import { Loader } from 'components/Loader/Loader';
import { Navigation } from 'components/Navigation/Navigation';
import { useAuth } from '../../hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { AppWrap, HeaderBox, MainBox } from './Layout';

export const AppLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppWrap>
      <HeaderBox>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </HeaderBox>

      <MainBox>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainBox>

      <GlobalStyle />
      <Toaster position="top-right" />
    </AppWrap>
  );
};
