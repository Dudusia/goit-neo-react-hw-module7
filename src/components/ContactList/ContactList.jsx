import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filtersSlice';
import { selectContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const searchText = useSelector(selectNameFilter);
  const contacts = useSelector(selectContacts);

  return (
    <ul className={css['contacts-list']}>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(searchText.toLowerCase())
        )
        .map(contact => {
          return (
            <li key={contact.id} className={css['contact-item']}>
              <Contact
                name={contact.name}
                number={contact.number}
                id={contact.id}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
