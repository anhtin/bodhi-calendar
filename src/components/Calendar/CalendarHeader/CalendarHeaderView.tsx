import React from 'react';
import { DateTime } from 'luxon';
import { Button } from 'bloomer';

import Flex from 'components/Flex';

interface CalendarHeaderViewProps {
  displayDate: DateTime;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export const CalendarHeaderView = ({
  displayDate,
  onPrevMonth,
  onNextMonth
}: CalendarHeaderViewProps) => {
  const month = displayDate.monthLong;
  const year = displayDate.year;
  return (
    <Flex alignItems="center">
        <Button onClick={onPrevMonth} isSize="large">&lt;</Button>
        <Flex direction="column" flex={1} alignItems="center">
          <h2>{year}</h2>
          <h1 style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{month}</h1>
        </Flex>
        <Button onClick={onNextMonth} isSize="large">&gt;</Button>
    </Flex>
  );
};
