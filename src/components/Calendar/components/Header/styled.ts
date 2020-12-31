import styled from 'styled-components';

import * as colors from 'utils/colors';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  background: white;
  padding: 0.75em 1em;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  color: #363636;
  font-size: 0.75em;
  text-align: center;
  cursor: pointer;

  :hover {
    background-color: ${colors.GRAY_LIGHT};
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const Year = styled.h2`
  font-size: 1em;
  font-weight: normal;
`;

export const Month = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
`;
