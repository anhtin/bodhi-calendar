import React from 'react';

import { Wrapper, Button, TitleWrapper, Year, Month } from './styled';
import { formatDate } from 'utils/date';

type Props = {
  year: number;
  month: number;
  onPrevMonth: () => void;
  onNextMonth: () => void;
};

function Header({ year, month, onPrevMonth, onNextMonth }: Props) {
  const formattedYear = formatDate(new Date(year, 0, 1), 'yyyy');
  const formattedMonth = formatDate(new Date(2000, month, 1), 'LLLL');
  return (
    <Wrapper>
      <Button onClick={onPrevMonth}>&lt;</Button>
      <TitleWrapper>
        <Year>{formattedYear}</Year>
        <Month>{formattedMonth}</Month>
      </TitleWrapper>
      <Button onClick={onNextMonth}>&gt;</Button>
    </Wrapper>
  );
}

export default Header;
