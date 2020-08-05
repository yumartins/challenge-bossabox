import {
  func,
  bool,
  oneOf,
  object,
  symbol,
  objectOf,
  oneOfType,
} from 'prop-types';

import IconCloseModal from '../../assets/svgs/icon-close-modal.svg';
import IconError from '../../assets/svgs/icon-error.svg';
import IconPlus from '../../assets/svgs/icon-plus.svg';
import Card from '../../components/Card';
import View from './styles';

const Modal = ({
  type,
  show,
  onShow,
  children,
}) => (
  <View show={show}>
    <Card isModal>
      <IconCloseModal onClick={() => onShow(! show)} />

      <h4>
        {type === 'add'
          ? <IconPlus />
          : <IconError />}
        {type === 'add'
          ? 'Add new tool'
          : 'Remove tool'}
      </h4>

      {children}
    </Card>
  </View>
);

Modal.propTypes = {
  type: oneOf(['add', 'remove']),
  show: bool,
  onShow: func,
  children: objectOf(oneOfType([
    symbol, object,
  ])),
};

Modal.defaultProps = {
  type: 'add',
  show: false,
  onShow: () => {},
  children: {},
};

export default Modal;
