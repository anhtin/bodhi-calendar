import styled from 'styled-components';

import * as colors from 'utils/colors';

export const Header = styled.header`
  margin-bottom: 1em;
  padding-bottom: 0.5em;
  border-bottom: 1px solid #3b3b3d;
`;

export const CloseButtonWrapper = styled.aside`
  position: absolute;
  top: 1.8em;
  right: 1.5em;
`;

export const CloseButton = styled.button`
  padding: 0.5em 0.75em;
  background-color: white;
  border: 1px solid #dbdbdb;
  border-radius: 4px;

  :hover {
    background-color: ${colors.GRAY_LIGHT};
  }
`;
