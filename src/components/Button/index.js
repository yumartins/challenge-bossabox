import {
  bool,
  object,
  string,
  oneOfType,
} from 'prop-types';

import {
  Icon,
  View,
} from './styles';

const Button = ({
  icon,
  label,
  submit,
  ...rest
}) => (
  <View
    {...rest}
    type={submit ? 'submit' : 'button'}
  >
    {icon && <Icon>{icon}</Icon>}

    {label}
  </View>
);

Button.propTypes = {
  icon: oneOfType([
    bool, object,
  ]),
  label: string.isRequired,
  submit: bool,
};

Button.defaultProps = {
  icon: false,
  submit: false,
};

export default Button;
