import {
  bool,
  string,
  object,
  oneOfType,
} from 'prop-types';

import IconSearch from '../../assets/svgs/icon-search.svg';
import { View, Wrapper } from './styles';

const Input = ({
  name,
  label,
  required,
  hasSearch,
  ...rest
}) => (
  <View>
    {label && (
      <label htmlFor={name}>
        {label}
        {required && <span>*</span>}
      </label>
    )}

    <Wrapper hasSearch={hasSearch}>
      {hasSearch && <IconSearch />}

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
  hasSearch: oneOfType([bool, object]),
};

Input.defaultProps = {
  name: '',
  label: false,
  required: false,
  hasSearch: false,
};

export default Input;
