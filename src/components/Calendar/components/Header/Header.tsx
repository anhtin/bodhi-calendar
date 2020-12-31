import React from 'react';

import { Wrapper, Button, TitleWrapper, Year, Month } from './styled';
import { formatDate } from 'utils/date';

type Props = {
  displayDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
};

function Header({ displayDate, onPrevMonth, onNextMonth }: Props) {
  const month = formatDate(displayDate, 'LLLL');
  const year = formatDate(displayDate, 'yyyy');
  return (
    <Wrapper>
      <Button onClick={onPrevMonth}>&lt;</Button>
      <TitleWrapper>
        <Year>{year}</Year>
        <Month>{month}</Month>
      </TitleWrapper>
      <Button onClick={onNextMonth}>&gt;</Button>
    </Wrapper>
  );
}

export default Header;
