import styled from 'styled-components';

import * as colors from 'utils/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WeekRow = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid black;
`;

export const WeekDay = styled.h3`
  flex: 1;
  font-size: 1em;
  font-weight: normal;
  text-align: center;
`;

export const Grid = styled.div`
  padding: 1vh 0;
`;

export const GridRow = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const DateWrapper = styled.div`
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

  ${({ isMonth }) => !isMonth && `opacity: 0.5;`}
`;
