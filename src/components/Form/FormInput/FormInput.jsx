// import PropTypes from 'prop-types';
import { Label, Input } from './FormInput.styled';

export const FormInput = ({ name, type, value, onChange }) => {
  return (
    <Label>
      {name}
      <Input
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        required
      />
    </Label>
  );
};
