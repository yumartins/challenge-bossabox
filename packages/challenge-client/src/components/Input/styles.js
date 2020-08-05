import styled, { css } from 'styled-components';

import { colors, typograph, animate } from '../../styles';

const {
  ink,
  red,
  white,
} = colors;

const {
  size,
  family,
  weight,
} = typograph;

const {
  basic,
} = animate;

export const Error = styled.span`
  font-size: ${size.s2};
  margin-top: 8px;
  line-height: 24px;
  letter-spacing: .36px;
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

  input,
  textarea {
    width: 100%;
    color: ${ink.base};
    border: 1px solid ${white.darkest};
    padding: 12px 16px;
    position: relative;
    font-size: ${size.s3};
    transition: all .3s ${basic};
    line-height: 26px;
    font-family: ${family};
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

export const View = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    font-weight: ${weight.semiBold};
    margin-bottom: 16px;
    
    span {
      color: ${ink.light};
      margin-left: 8px;
    }
  }

  ${({ error }) => error && css`
    label span {
      color: ${red.base};
    }

    input,
    textarea {
      color: ${red.base};
      border-color: ${red.base};
      background-color: ${red.most_lightest};
    }
  `}
`;
