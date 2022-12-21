import { Component } from 'react';
import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import { Box } from '../Box';
import { FormInput } from './FormInput/FormInput';
import { Button } from '../Button/Button';

export class Form extends Component {
  static defaultProps = {
    initName: '',
    initNumber: '',
  };

  static propTypes = {
    initName: PropTypes.string.isRequired,
    initNumber: PropTypes.string.isRequired,
  };

  state = {
    name: this.props.initName,
    number: this.props.initNumber,
  };

  handleInputChange = evt =>
    this.setState({
      [evt.currentTarget.name]: evt.currentTarget.value,
      id: evt.currentTarget.id,
    });

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    const resetState = Object.keys(this.state).reduce((acc, key) => {
      acc[key] = '';
      return acc;
    }, {});
    this.setState(resetState);
  };

  render() {
    return (
      <Box
        width="720px"
        mb="20px"
        pt="20px"
        pb="20px"
        pl="20px"
        bg="white"
        display="block"
        borderRadius="8px"
        boxShadow="1px 1px 6px black"
        as="form"
        onSubmit={this.handleSubmit}
      >
        <Box
          pb="20px"
          display="flex"
          alignItems="center"
          style={{ gap: '20px' }}
        >
          <FormInput
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
            getId={this.getId}
          />
          <FormInput
            name="number"
            type="tel"
            value={this.state.number}
            onChange={this.handleInputChange}
          />
        </Box>
        <Button type="submit" text="Add Contact" />
      </Box>
    );
  }
}
