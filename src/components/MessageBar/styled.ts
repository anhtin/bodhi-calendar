import styled from 'styled-components';

import * as colors from 'utils/colors';

export const Wrapper = styled.section`
  padding: 0.3em;
  background-color: ${colors.BROWN};
  color: ${colors.GRAY_LIGHT};
  white-space: pre-wrap;
`;

export const MessageWrapper = styled.article`
  & > p {
    display: inline;
  }

  & > a {
    color: white;
    text-decoration: underline;
  }
`;

export const Title = styled.header`
  font-weight: bold;
  text-transform: uppercase;
`;
