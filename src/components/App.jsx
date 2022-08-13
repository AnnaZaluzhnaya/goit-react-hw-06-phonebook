import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

export const App = () => {
  return (
    <div className="phonebook">
      <div className="phonebook-wrapper top">
        <h2 className="title">Phonebook</h2>
        <ContactForm/>
      </div>
      <div className="phonebook-wrapper">
        <h2 className="title">Contacts</h2>
        <Filter/>
        <ContactList/>
      </div>
    </div>
  );
};
