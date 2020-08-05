import styled, { css } from 'styled-components';

import { colors, typograph } from '../../styles';

const {
  blue,
  white,
} = colors;

const {
  size,
} = typograph;

const View = styled.div`
  width: fit-content;
  display: flex;
  position: relative;
  align-items: center;

  span {
    width: 15px;
    height: 15px;
    border: 1px solid ${white.most_darkest};
    display: flex;
    position: relative;
    align-items: center;
    margin-right: 6px;
    border-radius: 2px;
    justify-content: center;
    background-color: ${white.darker};

    svg {
      top: 1px;
      position: relative;

      path {
        stroke: ${white.base};
      }
    }
  }

  label {
    font-size: ${size.s3};
    line-height: 26px;
    letter-spacing: .4px;
  }

  input {
    top: 0;
    left: 0;
    width: 100%;
    cursor: pointer;
    height: 100%;
    position: absolute;
  }

  ${({ checked }) => checked && css`
    span {
      border-color: ${blue.base};
      background-color: ${blue.base};
    }
  `}
`;

export default View;
