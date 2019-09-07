import React from 'react';
import { Button } from 'bloomer';
import { DateTime } from 'luxon';

import Flex from 'components/Flex';

interface Props {
  displayDate: DateTime;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

function Header({
  displayDate,
  onPrevMonth,
  onNextMonth
}: Props) {
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

export default Header;
