import { useEffect } from 'react';
import ContactForm from './components/Contact/Сontact1';
import SearchBox from './components/SearchBox/SearchBox1';
import ContactList from './components/ContactList/СontactList1';
import ErrorMessage from './components/ErrorMessage/ErrorMessage1';
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
          {isLoading && <b>Loading contacts......</b>}
          {error && <ErrorMessage />}
        </section>
      </div>
    </div>
  );
}
