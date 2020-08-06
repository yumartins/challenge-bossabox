import { Form as Unform } from '@unform/web';
import styled, { css } from 'styled-components';

import Layout from '../../layouts/Layout';
import animate from '../animate';
import colors from '../colors';

const {
  ink,
  blue,
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

  & > div {
    &:not(:first-child) {
      margin-top: 24px;
    }

    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

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
    }
  }
`;

export const Tag = styled.li`
  color: ${ink.base};
  padding: 4px;
  border-radius: 4px;

  &:not(:first-child) {
    margin-left: 12px;
  }

  ${({ revealed }) => revealed && css`
    color: ${blue.base};
    background-color: ${blue.lightest};
  `}
`;

export const EmptyTools = styled.div`
  margin: 64px auto 0 auto;
  text-align: center;

  h5 {
    color: ${ink.light};
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

export const DeleteModal = styled.div`
  div {
    display: flex;
    margin-top: 48px;
    align-items: center;
    justify-content: flex-end;

    button:first-child {
      margin-right: 24px;
    }
  }
`;
