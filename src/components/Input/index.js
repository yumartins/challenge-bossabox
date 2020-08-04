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
  iconRight,
  ...rest
}) => (
  <View>
    {label && (
      <label htmlFor={name}>
        {label}
        {required && <span>*</span>}
      </label>
    )}

    <Wrapper>
      <input
        {...rest}
        id={name}
        required={required}
      />

      {iconRight}
    </Wrapper>
  </View>
);

Input.propTypes = {
  name: string,
  label: oneOfType([bool, string]),
  required: bool,
  iconRight: oneOfType([bool, object]),
};

Input.defaultProps = {
  name: '',
  label: false,
  required: false,
  iconRight: false,
};

export default Input;
