import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Сontact';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );
  return (
    <div className={css['container-contacts']}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} name={name} id={id} number={number} />
      ))}
    </div>
  );
};

export default ContactList;
