import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import style from './ContactForm.module.css';
import { useDispatch,useSelector} from 'react-redux';
import { addContacts } from 'redux/slice';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = event => {
    event.preventDefault();
    const contact = { name, number, id: nanoid() };


    dispatch(addContacts(contact));
    setName('');
    setNumber('');
  };

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>
        <p>Name</p>
        <input
          className={style.input}
          type="text"
          name="name"
          value={name}
          id={nameInputId}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor={numberInputId}>
        <p>Number</p>
        <input
          className={style.input}
          type="tel"
          name="number"
          value={number}
          id={numberInputId}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <br />
      <button type="submit" className={style.addBtn}>
        Add contact
      </button>
    </form>
  );
};


export default ContactForm;
