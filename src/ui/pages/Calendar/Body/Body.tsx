import { HTMLProps } from 'react';

import { BodhiCalendarDate } from '../../../../application';
import {
  DateWrapper,
  Grid,
  GridRow,
  LunarPart,
  SolarPart,
  TileWrapper,
  WeekDay,
  WeekRow,
  Wrapper,
} from './styled';

type CalendarBodyProps = {
  dayNames: DayRowProps['dayNames'];
  weeks: Array<Array<CalendarDate>>;
};

export function CalendarBody({
  weeks,
  dayNames: weekDayNames,
}: CalendarBodyProps) {
  return (
    <Wrapper>
      <WeekdayRow dayNames={weekDayNames} />
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

type DayRowProps = {
  dayNames: Array<string>;
};

function WeekdayRow({ dayNames: weekDayNames }: DayRowProps) {
  return (
    <thead>
      <WeekRow>
        {weekDayNames.map((day, i) => (
          <WeekDay key={i}>{day}</WeekDay>
        ))}
      </WeekRow>
    </thead>
  );
}

type DayTileProps = {
  day: CalendarDate;
};

export type CalendarDate = BodhiCalendarDate & {
  isToday: boolean;
  isThisMonth: boolean;
};

function DayTile({ day }: DayTileProps) {
  return (
    <Tile
      isToday={day.isToday}
      isVegetarianDay={day.isVegetarian}
      isMonth={day.isThisMonth}
    >
      <LunarPart aria-label="Lunar date">{day.lunarDate.day}</LunarPart>
      <SolarPart aria-label="Solar date">{day.solarDate.day}</SolarPart>
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
