import ContactList from './components/ContactList/kontactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactsForm/kontactsForm';

function App() {
  return (
    <>
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;
