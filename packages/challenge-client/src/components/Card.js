import { bool, arrayOf, element } from 'prop-types';
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

  ${({ isModal }) => (isModal
    ? css`
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
}) => {
  console.log(children);

  return (
    <View isModal={isModal}>
      {children}
    </View>
  );
};

Card.propTypes = {
  isModal: bool,
  children: arrayOf(element),
};

Card.defaultProps = {
  isModal: false,
  children: [],
};

export default Card;
