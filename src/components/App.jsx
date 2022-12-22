import { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from './Box';
import { Heading } from './Heading/Heading';
import { FormBox } from './Form/Form';
import { SubHeading } from './SubHeading/SubHeading';
import { Search } from './Search/Search';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  static defaultProps = {
    initContacts: [],
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
    const array = [...this.state.contacts];
    console.log(array);
    array.push(formData);
    this.setState({ contacts: [...array] });
  };

  render() {
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
            <Search searchLabel="Find contacts by name" />
            <Box height="20em" bg="white">
              <ContactList contacts={this.state.contacts} />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
