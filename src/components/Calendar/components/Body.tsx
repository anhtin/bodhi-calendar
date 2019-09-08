import React, { HTMLProps } from 'react';
import { DateTime, Info } from 'luxon';
import solarLunar from 'solarlunar';

import Flex from 'components/Flex';
import { useDate, useStore } from 'hooks';
import { composeCssClasses } from 'utils/helpers';
import styles from './Body.module.scss';

interface CalendarBodyProps {
  displayDate: DateTime;
}

function CalendarBody(props: CalendarBodyProps) {
  return (
    <Flex direction="column" justifyContent="space-between">
      <WeekdayRow />
      <DayGrid {...props} />
    </Flex>
  );
}

function WeekdayRow() {
  return (
    <Flex
      justifyContent="space-around"
      style={{ borderBottom: '1px solid black' }}
    >
      {Info.weekdaysFormat('short').map((day, i) => (
        <h3 key={i} style={{ flex: 1, textAlign: 'center' }}>{day}</h3>
      ))}
    </Flex>
  );
}

interface DayGridProps {
  displayDate: DateTime;
}

function DayGrid({ displayDate, }: DayGridProps) {
  const grid = computeDateGrid(displayDate);

  return (
    <div className={styles.dayGrid}>
      {grid.map((row, i) => (
        <Flex key={i} justifyContent="space-around">
          {row.map((col, j) => (
            <Flex key={j} flex={1} justifyContent="space-around">
              <DayTile
                date={col}
                discrete={!col.hasSame(displayDate, 'month')}
              />
            </Flex>
          ))}
        </Flex>
      ))}
    </div>
  );
}

function computeDateGrid(date: DateTime): DateTime[][] {
  date = date.startOf('week');
  const weeks = [];
  for (let week = 0; week < 5; week++) {
    const days = [];
    for (let day = 0; day < 7; day++) {
      days.push(date);
      date = date.plus({ days: 1 });
    }
    weeks.push(days);
  }
  return weeks;
}

interface DayTileProps {
  date: DateTime;
  discrete: boolean;
}

function DayTile({ date, discrete }: DayTileProps) {
  const currentDate = useDate();
  const [store] = useStore();
  const { schedule } = store.settings;
  const cDate = solarLunar.solar2lunar(date.year, date.month, date.day);

  const LunarPart = () => (
    <div className={styles.calendarTileLunarPart}>{cDate.lDay}</div>
  );
  const SolarPart = () => (
    <div className={styles.calendarTileSolarPart}>{date.day}</div>
  );

  return (
    <Tile
      isToday={currentDate.hasSame(date, 'day')}
      isVegetarianDay={schedule.pred(cDate)}
      isMonth={!discrete}
    >
      <LunarPart />
      <SolarPart />
    </Tile>
  );
};

type TileProps = {
  isToday: boolean;
  isVegetarianDay: boolean;
  isMonth: boolean;
} & HTMLProps<HTMLElement>;

function Tile({ isToday, isVegetarianDay, isMonth, children }: TileProps) {
  return (
    <Flex
      className={composeCssClasses([
        styles.calendarTile,
        !isMonth && styles.calendarTileDiscrete,
        isToday && styles.calendarTileToday,
        isVegetarianDay && styles.calendarTileVegetarian,
      ])}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Flex>
  );
};

export default CalendarBody;
