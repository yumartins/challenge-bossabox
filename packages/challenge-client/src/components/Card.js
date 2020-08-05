import {
  bool,
  arrayOf,
  element,
  oneOfType,
} from 'prop-types';
import styled, { css } from 'styled-components';

import { colors, shadow, animate } from '../styles';

const {
  white,
} = colors;

const {
  _300,
  _400,
} = shadow;

const {
  basic,
} = animate;

export const View = styled.div`
  padding: 30px;
  border-radius: 5px;
  background-color: ${white.base};

  ${({ isModal }) => (isModal
    ? css`
      width: 100%;
      max-width: 600px;
      box-shadow: ${_400};
    `
    : css`
      border: 1px solid ${white.darkest};
      transition: all .3s ${basic};

      &:hover {
        box-shadow: ${_300};
      }
    `)}
`;

const Card = ({
  isModal,
  children,
  ...rest
}) => (
  <View
    {...rest}
    isModal={isModal}
  >
    {children}
  </View>
);

Card.propTypes = {
  isModal: bool,
  children: arrayOf(oneOfType([
    element, bool,
  ])),
};

Card.defaultProps = {
  isModal: false,
  children: [],
};

export default Card;
