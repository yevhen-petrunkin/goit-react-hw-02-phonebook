import { Component } from 'react';
import PropTypes from 'prop-types';
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
      >
        <Box
          pb="20px"
          display="flex"
          alignItems="center"
          style={{ gap: '20px' }}
        >
          <FormInput name="name" type="text" />
          <FormInput name="number" type="tel" />
        </Box>
        <Button type="submit" text="Add Contact" />
      </Box>
    );
  }
}
