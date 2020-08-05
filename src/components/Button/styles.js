import styled, { css } from 'styled-components';

import { colors, typograph, animate } from '../../styles';

const {
  red,
  blue,
  white,
} = colors;

const {
  size: font,
  weight,
  family,
} = typograph;

const {
  basic,
} = animate;

const sizes = {
  sm: 'sm',
  md: 'md',
};

const appearances = {
  danger: 'danger',
  primary: 'primary',
  secondary: 'secondary',
};

export const Icon = styled.span`
  margin-right: 16px;
`;

export const View = styled.button`
  border: none;
  display: flex;
  font-size: ${font.s2};
  transition: all .3s ${basic};
  font-family: ${family};
  font-weight: ${weight.semiBold};
  line-height: 24px;
  align-items: center;
  border-radius: 5px;
  letter-spacing: .36px;
  justify-content: center;

  /**
   * Appearences
   */
  ${({ appearance }) => appearance === appearances.primary && css`
    color: ${white.base};
    background-color: ${blue.base};

    ${Icon} svg path {
      stroke: ${white.base};
    }

    &:hover {
      background-color: ${blue.dark};
    }

    &:focus {
      background-color: ${blue.darker};
    }
  `}

  ${({ appearance }) => appearance === appearances.secondary && css`
    color: ${blue.base};
    background-color: ${blue.most_lightest};

    ${Icon} svg path {
      stroke: ${blue.base};
    }

    &:hover {
      background-color: ${blue.lightest};
    }

    &:focus {
      background-color: ${blue.lighter};
    }
  `}

  ${({ appearance }) => appearance === appearances.danger && css`
    color: ${red.base};
    background-color: ${red.most_lightest};

    ${Icon} svg path {
      stroke: ${red.base};
    }

    &:hover {
      background-color: ${red.lightest};
    }

    &:focus {
      background-color: ${red.lighter};
    }
  `}

  /**
   * Sizes
   */
  ${({ size }) => size === sizes.sm && css`
    padding: 6px 18px;
  `}

  ${({ size }) => size === sizes.md && css`
    padding: 14px 26px;
  `}
`;
