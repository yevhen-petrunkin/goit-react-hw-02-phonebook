// import PropTypes from 'prop-types';
import { Label, Input } from './FormInput.styled';

export const FormInput = ({ name, type }) => {
  return (
    <Label>
      {name}
      <Input name={name} type={type} />
    </Label>
  );
};
