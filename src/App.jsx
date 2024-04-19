import { useEffect } from 'react';
import ContactForm from './components/Contact/contact';
import SearchBox from './components/SearchBox/searchBox';
import ContactList from './components/ContactList/contactList';
import ErrorMessage from './components/ErrorMessage/errorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactOps';
import { selectError, selectIsLoading } from './redux/contactsSlice';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h1>PhoneBook</h1>
        <section>
          <ContactForm />
        </section>
        <section>
          <SearchBox />
        </section>
        <section>
          <ContactList />
          {isLoading && <b>Request in progress...</b>}
          {error && <ErrorMessage />}
        </section>
      </div>
    </div>
  );
}
