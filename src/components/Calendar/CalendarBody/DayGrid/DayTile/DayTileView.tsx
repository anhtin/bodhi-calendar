import React, { ReactElement } from 'react';
import { DateTime } from 'luxon';
import solarLunar from 'solarlunar';

import Flex from 'components/Flex';
import { VegetarianDayPredicate } from 'utils/types';
import { composeCssClasses } from 'utils/helpers';
import './style.scss';

interface DayTileViewProps {
  today: DateTime;
  date: DateTime;
  pred: VegetarianDayPredicate;
  discrete: boolean;
};

const DayTileView = ({
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
      <div className="calendar-tile-lunar-part">{cDate.lDay}</div>
      <div className="calendar-tile-solar-part">{date.day}</div>
    </Tile>
  );
};

interface TileProps {
  isToday: boolean;
  isVegetarianDay: boolean;
  isMonth: boolean;
  children: ReactElement | ReactElement[];
}
const Tile = ({ isToday, isVegetarianDay, isMonth, children }: TileProps) => (
  <Flex
    className={composeCssClasses([
      'calendar-tile',
      isMonth ? null : 'calendar-tile-discrete',
      isToday ? 'calendar-tile-today' : null,
      isVegetarianDay ? 'calendar-tile-vegetarian' : null,
    ])}
    direction="column"
    justifyContent="center"
    alignItems="center"
  >
    {children}
  </Flex>
);

export default DayTileView;
