import styled, { css } from 'styled-components';

import { colors, animate } from '../../styles';

const {
  ink,
} = colors;

const {
  rubber,
} = animate;

const View = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  display: flex;
  z-index: 999;
  position: fixed;
  align-items: center;
  pointer-events: none;
  justify-content: center;
  background-color: ${ink.base}E6;

  & > div {
    top: 32px;
    display: flex;
    position: relative;
    transition: all .6s ${rubber};
    flex-direction: column;

    & > svg {
      top: 30px;
      right: 30px;
      cursor: pointer;
      position: absolute;
    }

    h4 {
      margin-bottom: 24px;

      svg {
        margin-right: 12px;
      }
    }
  }

  ${({ show }) => show && css`
    opacity: 1;
    pointer-events: all;

    & > div {
      top: 0;
    }
  `}
`;

export default View;
