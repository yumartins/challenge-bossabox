import styled, { css } from 'styled-components';

import { colors, typograph, animate } from '../../styles';

const {
  ink,
  white,
} = colors;

const {
  size,
  weight,
} = typograph;

const {
  basic,
} = animate;

export const Error = styled.span``;

export const View = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    font-weight: ${weight.semiBold};
    margin-bottom: 20px;
    
    span {
      color: ${ink.light};
      margin-left: 8px;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;

  svg {
    left: 16px;
    z-index: 2;
    position: absolute;

    g {
      stroke: ${ink.lighter};
    }
  }

  input {
    width: 100%;
    color: ${ink.base};
    border: 1px solid ${white.darkest};
    padding: 12px 16px;
    position: relative;
    font-size: ${size.s3};
    line-height: 26px;
    transition: all .3s ${basic};
    border-radius: 5px;
    background-color: ${white.darker};

    &:focus {
      border-color: ${white.most_darkest};
      background-color: ${white.darkest};
    }

    &::placeholder {
      color: ${ink.lighter};
    }
  }

  ${({ hasSearch }) => hasSearch && css`
    input {
      padding: 12px 16px 12px 56px;
    }
  `}
`;
