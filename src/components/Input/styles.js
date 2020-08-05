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

export const View = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  input,
  label {
    font-size: ${size.s3};
    line-height: 26px;
    letter-spacing: .4px;
  }

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
    right: 20px;
    position: absolute;
  }

  input {
    width: 100%;
    color: ${ink.base};
    border: 1px solid ${white.darkest};
    padding: 12px 20px;
    position: relative;
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
      padding: 12px 40px 12px 20px;
    }
  `}
`;
