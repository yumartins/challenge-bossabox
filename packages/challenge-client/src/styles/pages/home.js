import { Form as Unform } from '@unform/web';
import styled, { css } from 'styled-components';

import Layout from '../../layouts/Layout';
import animate from '../animate';
import colors from '../colors';

const {
  ink,
} = colors;

const {
  rubber,
} = animate;

export const View = styled(Layout)`
  h1 {
    margin-top: 32px;
  }
`;

export const Head = styled.div`
  display: flex;
  margin-top: 64px;
  align-items: center;

  & > div:first-child {
    max-width: 324px;
    margin-right: 24px;
  }

  button {
    margin-left: auto;
  }
`;

export const Body = styled.div`
  margin-top: 64px;

  h4 {
    text-transform: capitalize;
  }

  p {
    margin-top: 24px;
  }

  ul {
    display: flex;
    margin-top: 32px;
    align-items: center;

    li {
      color: ${ink.base};
      padding: 4px;
      border-radius: 4px;

      &:not(:first-child) {
        margin-left: 12px;
      }
    }
  }

  & > div {
    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &:not(:first-child) {
      margin-top: 24px;
    }
  }
`;

export const FormModal = styled(Unform)`
  & > div {
    margin-top: 16px;
  }

  button {
    margin: 24px 0 0 auto;
  }
`;
