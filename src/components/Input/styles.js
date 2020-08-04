import styled from 'styled-components';

import { colors, typograph } from '../../styles';

const {
  ink,
} = colors;

const {
  size,
  weight,
} = typograph;

export const View = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    font-size: ${size.s3};
    line-height: 26px;
    font-weight: ${weight.semiBold};
    letter-spacing: .4px;
    
    span {
      color: ${ink.light};
      margin-left: 8px;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;

  input {
    padding: 12px 20px;
  }
`;
