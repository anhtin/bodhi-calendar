import React from 'react';
import { DateTime, Info } from 'luxon';

import DayGrid from './DayGrid';
import Flex from 'components/Flex';
import { VegetarianDayPredicate } from 'utils/types';


interface CalendarBodyViewProps {
  currentDate: DateTime;
  displayDate: DateTime;
  pred: VegetarianDayPredicate;
}

export const CalendarBodyView = (props: CalendarBodyViewProps) => (
  <Flex direction="column" justifyContent="space-between">
    <WeekdayRow />
    <DayGrid {...props} />
  </Flex>
);

const WeekdayRow = () => (
  <Flex justifyContent="space-around" style={{ borderBottom: '1px solid black' }}>
    {Info.weekdaysFormat('short').map((day, i) => (
      <h3 key={i} style={{ flex: 1, textAlign: 'center' }}>{day}</h3>
    ))}
  </Flex>
);
