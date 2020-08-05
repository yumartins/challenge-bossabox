import styled, { css } from 'styled-components';

import { colors, typograph } from '../../styles';

const {
  blue,
  white,
} = colors;

const {
  size,
  weight,
  family,
} = typograph;

const appearances = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
};

export const Icon = styled.span`
  margin-right: 16px;
`;

export const View = styled.button`
  border: none;
  display: flex;
  padding: 14px 26px;
  font-size: ${size.s2};
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
  `}

  ${({ appearance }) => appearance === appearances.secondary && css`
    color: ${blue.base};
    background-color: transparent;

    ${Icon} svg path {
      stroke: ${blue.base};
    }
  `}
`;
