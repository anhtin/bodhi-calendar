import React, { HTMLProps } from 'react';
import {
  isSameDay,
  isSameMonth,
  startOfMonth,
  addDays,
  getDate,
  getMonth,
  getYear,
} from 'date-fns';
import solarLunar from 'solarlunar';

import { useDate, useStore } from 'hooks';
import { getStartOfWeek, WEEK_DAYS } from 'utils/date';
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

interface CalendarBodyProps {
  displayDate: Date;
}

function CalendarBody(props: CalendarBodyProps) {
  return (
    <Wrapper>
      <WeekdayRow />
      <DayGrid {...props} />
    </Wrapper>
  );
}

function WeekdayRow() {
  return (
    <WeekRow>
      {WEEK_DAYS.map((day, i) => (
        <WeekDay key={i}>{day}</WeekDay>
      ))}
    </WeekRow>
  );
}

interface DayGridProps {
  displayDate: Date;
}

function DayGrid({ displayDate }: DayGridProps) {
  const grid = computeDateGrid(displayDate);

  return (
    <Grid>
      {grid.map((row, i) => (
        <GridRow key={i}>
          {row.map((col, j) => (
            <DateWrapper key={j}>
              <DateTile date={col} discrete={!isSameMonth(displayDate, col)} />
            </DateWrapper>
          ))}
        </GridRow>
      ))}
    </Grid>
  );
}

function computeDateGrid(date: Date): Date[][] {
  date = getStartOfWeek(startOfMonth(date));
  const weeks = [];
  for (let week = 0; week < 5; week++) {
    const days = [];
    for (let day = 0; day < 7; day++) {
      days.push(date);
      date = addDays(date, 1);
    }
    weeks.push(days);
  }
  return weeks;
}

interface DateTileProps {
  date: Date;
  discrete: boolean;
}

function DateTile({ date, discrete }: DateTileProps) {
  const currentDate = useDate();
  const [store] = useStore();
  const { schedule } = store.settings;
  const cDate = solarLunar.solar2lunar(
    getYear(date),
    getMonth(date) + 1,
    getDate(date)
  );

  return (
    <Tile
      isToday={isSameDay(date, currentDate)}
      isVegetarianDay={schedule.pred(cDate)}
      isMonth={!discrete}
    >
      <LunarPart>{cDate.lDay}</LunarPart>
      <SolarPart>{getDate(date)}</SolarPart>
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
