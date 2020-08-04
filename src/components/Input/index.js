import {
  bool,
  string,
  object,
  oneOfType,
} from 'prop-types';

import { View, Wrapper } from './styles';

const Input = ({
  name,
  label,
  required,
  iconLeft,
}) => (
  <View>
    {label && (
      <label htmlFor={name}>
        {label}

        {required && <span>*</span>}
      </label>
    )}

    <Wrapper>
      {iconLeft}
      <input
        {...rest}
        id={name}
        required={required}
      />
    </Wrapper>
  </View>
);

Input.propTypes = {
  name: string,
  label: oneOfType([bool, string]),
  required: bool,
  iconLeft: oneOfType([bool, object]),
};

Input.defaultProps = {
  name: '',
  label: false,
  required: false,
  iconLeft: false,
};

export default Input;
