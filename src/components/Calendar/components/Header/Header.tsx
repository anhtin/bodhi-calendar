import React from 'react';
import { Button } from 'bloomer';

import { Wrapper, TitleWrapper, Year, Month } from './styled';
import { formatDate } from 'utils/date';

interface Props {
  displayDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

function Header({ displayDate, onPrevMonth, onNextMonth }: Props) {
  const month = formatDate(displayDate, 'LLLL');
  const year = formatDate(displayDate, 'yyyy');
  return (
    <Wrapper>
      <Button onClick={onPrevMonth} isSize="large">
        &lt;
      </Button>
      <TitleWrapper>
        <Year>{year}</Year>
        <Month>{month}</Month>
      </TitleWrapper>
      <Button onClick={onNextMonth} isSize="large">
        &gt;
      </Button>
    </Wrapper>
  );
}

export default Header;
