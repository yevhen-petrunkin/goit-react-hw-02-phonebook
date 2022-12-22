// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { Label, Input } from './FormInput.styled';

export const FormName = ({ value, onChange }) => {
  FormName.id = nanoid();
  return (
    <Label>
      Name
      <Input
        id={FormName.id}
        name="name"
        type="text"
        onChange={onChange}
        value={value}
        required
      />
    </Label>
  );
};

export const FormNumber = ({ value, onChange }) => {
  FormNumber.id = nanoid();
  return (
    <Label>
      Name
      <Input
        id={FormNumber.id}
        name="number"
        type="text"
        onChange={onChange}
        value={value}
        required
      />
    </Label>
  );
};

// {
//   /* <Label>
//         Number
//         <Input
//           name="number"
//           type="tel"
//           onChange={onChange}
//           value={value}
//           required
//         />
//       </Label> */
// }
