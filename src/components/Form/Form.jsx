import { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Form } from './Form.styled';
import { FormName, FormNumber } from './FormInput/FormInput';
import { Button } from '../Button/Button';

export class FormBox extends Component {
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
      <Form autocomplete="off" onSubmit={this.handleSubmit}>
        <Box
          pb="20px"
          display="flex"
          alignItems="center"
          style={{ gap: '20px' }}
        >
          <FormName value={this.state.name} onChange={this.handleInputChange} />
          <FormNumber
            value={this.state.number}
            onChange={this.handleInputChange}
          />
        </Box>
        <Button type="submit" text="Add Contact" />
      </Form>
    );
  }
}
