import React, { CSSProperties, ReactElement } from 'react';
import { DateTime } from 'luxon';
import solarLunar from 'solarlunar';

import Flex from 'components/Flex';
import { VegetarianDayPredicate } from 'utils/types';
import { colors } from 'utils/theme';

interface DayTileViewProps {
  today: DateTime;
  date: DateTime;
  pred: VegetarianDayPredicate;
  discrete: boolean;
};

export const DayTileView = ({
  date,
  pred,
  today,
  discrete
}: DayTileViewProps) => {
  const cDate = solarLunar.solar2lunar(date.year, date.month, date.day);
  return (
    <Tile
      isMonth={!discrete}
      isToday={date.hasSame(today, 'day')}
      isVegetarianDay={pred(cDate)}
    >
      <LunarPart>{cDate.lDay}</LunarPart>
      <SolarPart isToday={date.hasSame(today, 'day')}>{date.day}</SolarPart>
    </Tile>
  );
};

interface SolarPartProps {
  isToday: boolean;
  children: any;
}
const SolarPart = ({ children }: SolarPartProps) => (
  <div style={{
    transform: 'translate(0, -0.2em)'
  }}>
    {children}
  </div>
);

interface LunarPartProps {
  children: number;
}
const LunarPart = ({ children }: LunarPartProps) => (
  <small style={{
    fontSize: '0.5em',
    transform: 'translate(0, 0.5em)'
  }}>
    {children}
  </small>
);

interface TileProps {
  isToday: boolean;
  isVegetarianDay: boolean;
  isMonth: boolean;
  children: ReactElement | ReactElement[];
}
const Tile = ({ isToday, isVegetarianDay, isMonth, children }: TileProps) => {
  const style = {
    width: '2em',
    height: '2em',
    ...(isMonth ? null : notMonthStyle),
    ...(isToday ? todayStyle : null),
    ...(isVegetarianDay ? vegetarianStyle : null),
  };
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={style}
    >
      {children}
    </Flex>
  );
}

const vegetarianStyle: CSSProperties = {
  fontWeight: 'bold',
  color: colors.GREEN,
};
const todayStyle: CSSProperties = {
  fontWeight: 'bold',
  borderRadius: '500%',
  backgroundColor: colors.BROWN,
};
const notMonthStyle: CSSProperties = {
  opacity: 0.5,
};