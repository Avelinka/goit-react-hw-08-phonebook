// import { GlobalStyle } from './GlobalStyle';
// import { Toaster } from 'react-hot-toast';

// import { BsCardList } from 'react-icons/bs';
// import { BsBook } from 'react-icons/bs';

// import { MainSection, Wrapper } from './Helper/Layout';
// import { HeaderWrap, MainHeader, Header } from './Helper/Headers';
// import { ContactForm } from './ContactForm/ContactForm';
// import { SearchBar } from './SearchBar/SearchBar';
// import { ContactList } from './ContactList/ContactList';

// export const App = () => {
//   return (
//     <MainSection>
//       <Wrapper>
//         <TitleWrap>
//           <BsBook size="40" />
//           <MainTitle>Phonebook</MainTitle>
//         </TitleWrap>
//         <ContactForm />

//         <TitleWrap>
//           <BsCardList size="28" />
//           <Title>Contacts</Title>
//         </TitleWrap>
//         <SearchBar />
//         <ContactList />
//       </Wrapper>

//       <GlobalStyle />
//       <Toaster />
//     </MainSection>
//   );
// };

import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { AppLayout } from './Helper/AppLayout';

import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from '../hooks/useAuth';
import { refreshUser } from '../redux/auth/operations';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
