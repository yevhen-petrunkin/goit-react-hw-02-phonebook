import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Contact } from './Contact';

export const ContactList = ({ contacts, handleClick }) => {
  return (
    <ul>
      {contacts.map(contact => {
        Contact.id = nanoid();
        return (
          <Contact
            key={Contact.id}
            contact={contact}
            handleClick={handleClick}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
};
