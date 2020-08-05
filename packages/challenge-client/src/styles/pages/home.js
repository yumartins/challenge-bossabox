import styled from 'styled-components';

import Layout from '../../layouts/Layout';

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
`;
