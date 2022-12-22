import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import { Contact } from './Contact/Contact';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => {
        Contact.id = nanoid();
        return <Contact key={Contact.id} contact={contact} />;
      })}
    </ul>
  );
};
