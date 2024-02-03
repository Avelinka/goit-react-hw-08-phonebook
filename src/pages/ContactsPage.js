import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';

import { BsCardList } from 'react-icons/bs';
import { BsBook } from 'react-icons/bs';

import { MainSection, Wrapper } from '../components/Helper/Layout';
import { TitleWrap, MainTitle, Title } from '../components/Helper/Titles';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { ContactList } from '../components/ContactList/ContactList';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <MainSection>
      <Wrapper>
        <TitleWrap>
          <BsBook size="40" />
          <MainTitle>Phonebook</MainTitle>
        </TitleWrap>
        <ContactForm />

        <TitleWrap>
          <BsCardList size="28" />
          <Title>Contacts</Title>
        </TitleWrap>
        <SearchBar />
        <ContactList />
      </Wrapper>
    </MainSection>
  );
}
