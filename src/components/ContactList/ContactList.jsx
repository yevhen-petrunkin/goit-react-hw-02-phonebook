import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import { Contact } from './Contact';

export const ContactList = ({ contacts, handleClick }) => {
  console.log(contacts);
  return contacts.length ? (
    <List>
      {contacts.map(contact => {
        return (
          <Contact
            key={contact.name}
            contact={contact}
            handleClick={handleClick}
          />
        );
      })}
    </List>
  ) : (
    <p>Oops... No contacts left.</p>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
};
