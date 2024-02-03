// import { useDispatch, useSelector } from 'react-redux';

// import {
//   selectVisibleContacts,
//   selectError,
//   selectIsLoading,
// } from '../../redux/contacts/selectors';
// import { deleteContact } from '../../redux/contacts/operations';

// import { Loader } from '../Loader/Loader';

// import { BsFillPersonDashFill } from 'react-icons/bs';
// import {
//   ContactsList,
//   ContactsListItem,
//   ItemWrap,
//   ContactsWrap,
//   DeleteBtn,
//   NoContacts,
// } from './ContactList.styled';

// export const ContactList = () => {
//   const visibleContacts = useSelector(selectVisibleContacts);
//   const error = useSelector(selectError);
//   const isLoading = useSelector(selectIsLoading);
//   const dispatch = useDispatch();

//   const onDelete = e => {
//     dispatch(deleteContact(e.currentTarget.id));
//   };

//    if (!visibleContacts.length) {
//     return (
//       <NoContacts>No contacts added yet.</NoContacts>
//           );
//   }

//   return (
//     <>
//       {isLoading && <Loader />}
//       {error && <p>{error}</p>}
//       <ContactsList>
//         {visibleContacts.map(({ name, number, id }) => {
//           return (
//             <ContactsListItem key={id}>
//               <ItemWrap>
//                 <ContactsWrap>{name}:</ContactsWrap>
//                 <ContactsWrap>{number}</ContactsWrap>
//               </ItemWrap>
//               <DeleteBtn type="button" id={id} onClick={onDelete}>
//                 Delete
//                 <BsFillPersonDashFill size="16" />
//               </DeleteBtn>
//             </ContactsListItem>
//           );
//         })}
//       </ContactsList>
//     </>
//   );
// };

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectFilter,
} from '../../redux/contacts/selectors';
import { fetchContacts, deleteContact } from '../../redux/contacts/operations';

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
  const filteredContacts = useSelector(selectFilter);
  // const visibleContacts = useSelector(selectVisibleContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isExistContacts = () => {
    if (!filteredContacts || filteredContacts === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filteredContacts)
    );
  };

  const visibleContacts = isExistContacts();

  if (!visibleContacts?.length) {
    return <NoContacts>No contacts added yet.</NoContacts>;
  }

  // if (!visibleContacts?.length) {
  //   return (
  //     <NoContacts>There is no such name in your contacts list.</NoContacts>
  //   );
  // }
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
