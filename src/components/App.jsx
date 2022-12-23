import { Component } from 'react';
import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import { Box } from './Box';
import { Heading } from './Heading/Heading';
import { FormBox } from './Form/Form';
import { SubHeading } from './SubHeading/SubHeading';
import { Search } from './Search/Search';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  static defaultProps = {
    initContacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    initFilter: '',
  };

  static propTypes = {
    initContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    initFilter: PropTypes.string.isRequired,
  };

  state = {
    contacts: this.props.initContacts,
    filter: this.props.initFilter,
  };

  formSubmitHandler = formData => {
    this.setState(({ contacts }) => ({
      contacts: [formData, ...contacts],
    }));
  };

  searchHandler = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedSearch = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedSearch)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Box
        width="768px"
        height="100vh"
        m="0 auto"
        pt="20px"
        pb="20px"
        bg="rgb(239 239 239)"
        as="main"
      >
        <Box pl="20px" as="section">
          <Heading title="Phonebook" />
          <FormBox onSubmit={this.formSubmitHandler} />
          <Box
            width="720px"
            pl="20px"
            bg="white"
            borderRadius="8px"
            boxShadow="1px 1px 6px black"
            as="section"
          >
            <SubHeading subtitle="Contacts" />
            <Search
              searchLabel="Find contacts by name"
              value={filter}
              onChange={this.searchHandler}
            />
            <Box height="20em" bg="white">
              <ContactList contacts={visibleContacts} />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

// ======Old But Working Version======

// formSubmitHandler = formData => {
//   const array = [...this.state.contacts];
//   console.log(array);
//   array.push(formData);
//   this.setState({ contacts: [...array] });
// };

// searchHandler = evt => {
//   const filteredContacts = this.state.contacts.filter(contact =>
//     contact.name.toLowerCase().includes(evt.currentTarget.value.toLowerCase())
//   );
//   this.setState({ filter: filteredContacts });
// };
