import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const initualValues = {
  name: '',
  number: '',
};
const nameReg = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const numberReg =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const FeedbackSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long')
    .required('Required')
    .matches(
      nameReg,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer'
    ),
  number: yup
    .string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long')
    .required('Required')
    .matches(numberReg, 'Mobile phone number must have 8 digits'),
});

const nameFieldId = nanoid();
const numberFieldId = nanoid();

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const contact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(contact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initualValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>
          Name
          <Field name="name" type="text" id={nameFieldId} />
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>
        <label className={css.label} htmlFor={numberFieldId}>
          Number
          <Field name="number" type="text" id={numberFieldId} />
          <ErrorMessage name="number" component="span" className={css.error} />
        </label>

        <button className={css.addBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
