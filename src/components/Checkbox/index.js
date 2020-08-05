import { func, bool, string } from 'prop-types';

import IconCheck from '../../assets/svgs/icon-check.svg';
import View from './styles';

const Checkbox = ({
  name,
  label,
  checked,
  onChecked,
}) => (
  <View checked={checked}>
    <span>
      {checked && <IconCheck />}
    </span>

    <label htmlFor={name}>{label}</label>

    <input
      id={name}
      type="checkbox"
      checked={checked}
      onChange={(e) => onChecked(e.target.checked)}
    />
  </View>
);

Checkbox.propTypes = {
  name: string,
  label: string,
  checked: bool,
  onChecked: func,
};

Checkbox.defaultProps = {
  name: '',
  label: '',
  checked: false,
  onChecked: () => {},
};

export default Checkbox;
