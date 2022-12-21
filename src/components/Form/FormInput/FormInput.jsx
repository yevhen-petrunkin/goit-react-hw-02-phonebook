// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Label, Input } from './FormInput.styled';

export const FormInput = ({ name, type, value, onChange }) => {
  FormInput.id = nanoid();
  return (
    <Label>
      {name}
      <Input
        id={FormInput.id}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        required
      />
    </Label>
  );
};
