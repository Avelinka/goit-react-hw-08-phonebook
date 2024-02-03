import { useDispatch, useSelector } from 'react-redux';

import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';

import { Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

import { BsFillPersonFill } from 'react-icons/bs';
import { BsTelephoneFill } from 'react-icons/bs';
import { BsFillPersonPlusFill } from 'react-icons/bs';

import {
  Form,
  Label,
  LabelWrap,
  Field,
  ErrorMessage,
  AddBtn,
} from './ContactForm.styled';

const сontactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я'. -]+$/,
      'Name may contain only letters, apostrophe, dot, dash and spaces. For example Jane Dou'
    )
    .required('Required'),
  number: Yup.string()
    .trim()
    .min(7, 'Too Short!')
    .matches(
      /^[0-9+ ()-]+$/,
      'Please enter a valid phone number. For example 111-11-11'
    )
    .required('Required'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onAddContact = (newContact, { resetForm }) => {
    const isExistName = contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    const isExistPhone = contacts.some(
      ({ number }) => number === newContact.number
    );

    if (isExistName) {
      return toast.error(`${newContact.name}: is already in contacts`);
    }

    if (isExistPhone) {
      return toast.error(`${newContact.number}: is already in contacts`);
    }

    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={сontactSchema}
      onSubmit={onAddContact}
    >
      <Form autoComplete="off">
        <Label htmlFor="name">
          <LabelWrap>
            <BsFillPersonFill size="18" />
            Name
          </LabelWrap>
          <Field
            autoComplete="off"
            type="text"
            id="name"
            name="name"
            placeholder="Jane Doe"
            required
          />
          <ErrorMessage name="name" component="span" />
        </Label>
        <Label htmlFor="number">
          <LabelWrap>
            <BsTelephoneFill size="16" />
            Phone
          </LabelWrap>
          <Field
            autoComplete="off"
            type="tel"
            id="number"
            name="number"
            placeholder="111-11-11"
            required
          />
          <ErrorMessage name="number" component="span" />
        </Label>
        <AddBtn type="submit">
          Add contact
          <BsFillPersonPlusFill size="16" />
        </AddBtn>
      </Form>
    </Formik>
  );
};
