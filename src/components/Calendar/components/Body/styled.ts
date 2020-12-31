import styled from 'styled-components';

import * as colors from 'utils/colors';

export const Wrapper = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WeekRow = styled.tr`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid black;
`;

export const WeekDay = styled.th`
  flex: 1;
  font-size: 1em;
  font-weight: normal;
  text-align: center;
`;

export const Grid = styled.tbody`
  padding: 1vh 0;
`;

export const GridRow = styled.tr`
  display: flex;
  justify-content: space-around;
`;

export const DateWrapper = styled.td`
  display: flex;
  flex: 1;
  justify-content: space-around;
`;

export const LunarPart = styled.div`
  font-size: 0.5em;
  transform: translate(0, 0.5em);
`;

export const SolarPart = styled.div`
  transform: translate(0, -0.2em);
`;

export type TileWrapperProps = {
  isMonth: boolean;
  isToday: boolean;
  isVegetarian: boolean;
};

export const TileWrapper = styled.div<TileWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 2em;
  height: 2em;

  ${({ isVegetarian }) =>
    isVegetarian &&
    `
    font-weight: bold;
    color: ${colors.SECONARY} !important;
  `}

  ${({ isToday }) =>
    isToday &&
    `
    font-weight: bold;
    border-radius: 500%;
    color: ${colors.YELLOW_LIGHT};
    background-color: ${colors.PRIMARY};
  `}

  ${({ isVegetarian, isToday }) =>
    isVegetarian &&
    isToday &&
    `
    text-shadow: -0.5px 0.5px 0.5px #3b3b3b, 0.5px 0.5px 0.5px #3b3b3b, 0 -0.5px 0.5px #3b3b3b;
  `}

  ${({ isMonth }) => !isMonth && `opacity: 0.5;`}
`;
