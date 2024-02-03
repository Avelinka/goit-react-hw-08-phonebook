import { useDispatch, useSelector } from 'react-redux';

import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';

import { Loader } from '../Loader/Loader';

import { BsFillPersonDashFill } from 'react-icons/bs';
import {
  ContactsList,
  ContactsListItem,
  ItemWrap,
  ContactsWrap,
  DeleteBtn,
  NoContacts,
} from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  if (!contacts?.length) {
    return <NoContacts>No contacts added yet.</NoContacts>;
  }

  if (!visibleContacts?.length) {
    return (
      <NoContacts>There is no such name in your contacts list.</NoContacts>
    );
  }
  const onDeleteContact = evt => {
    dispatch(deleteContact(evt.currentTarget.id));
  };

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <ContactsList>
        {visibleContacts.map(({ id, name, number }) => {
          return (
            <ContactsListItem key={id}>
              <ItemWrap>
                <ContactsWrap>{name}:</ContactsWrap>
                <ContactsWrap>{number}</ContactsWrap>
              </ItemWrap>
              <DeleteBtn type="button" id={id} onClick={onDeleteContact}>
                Delete
                <BsFillPersonDashFill size="16" />
              </DeleteBtn>
            </ContactsListItem>
          );
        })}
      </ContactsList>
    </>
  );
};
