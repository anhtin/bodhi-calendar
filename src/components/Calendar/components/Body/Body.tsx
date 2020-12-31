import React, { HTMLProps } from 'react';
import { isSameDay } from 'date-fns';

import { useDate } from 'hooks';
import { WEEK_DAYS } from 'utils/date';
import {
  Wrapper,
  WeekRow,
  WeekDay,
  Grid,
  GridRow,
  DateWrapper,
  LunarPart,
  SolarPart,
  TileWrapper,
} from './styled';
import { Week, Day } from '../../../../domain';

type CalendarBodyProps = {
  weeks: Array<Week>;
};

function CalendarBody({ weeks }: CalendarBodyProps) {
  return (
    <Wrapper>
      <WeekdayRow />
      <Grid>
        {weeks.map((week, i) => (
          <GridRow key={i}>
            {week.map((day, j) => (
              <DateWrapper key={j}>
                <DayTile day={day} />
              </DateWrapper>
            ))}
          </GridRow>
        ))}
      </Grid>
    </Wrapper>
  );
}

function WeekdayRow() {
  return (
    <thead>
      <WeekRow>
        {WEEK_DAYS.map((day, i) => (
          <WeekDay key={i}>{day}</WeekDay>
        ))}
      </WeekRow>
    </thead>
  );
}

type DayTileProps = {
  day: Day;
};

function DayTile({ day }: DayTileProps) {
  const date = useDate();
  return (
    <Tile
      isToday={isSameDay(day.solarDate, date)}
      isVegetarianDay={day.isVegetarianDay}
      isMonth={day.isInMonth}
    >
      <LunarPart aria-label="Lunar date">{day.lunarDay}</LunarPart>
      <SolarPart aria-label="Solar date">{day.solarDay}</SolarPart>
    </Tile>
  );
}

type TileProps = {
  isToday: boolean;
  isVegetarianDay: boolean;
  isMonth: boolean;
} & HTMLProps<HTMLElement>;

function Tile({ isToday, isVegetarianDay, isMonth, children }: TileProps) {
  return (
    <TileWrapper
      isMonth={isMonth}
      isToday={isToday}
      isVegetarian={isVegetarianDay}
    >
      {children}
    </TileWrapper>
  );
}

export default CalendarBody;
