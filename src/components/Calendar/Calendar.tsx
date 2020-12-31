import React, { useState, useMemo } from 'react';
import {
  getYear,
  getMonth,
  startOfMonth,
  subMonths,
  addMonths,
} from 'date-fns';

import Body from './components/Body';
import Header from './components/Header';
import OpenSettingsButton from './components/OpenSettingsButton';
import SettingsModal from './components/SettingsModal';
import { Wrapper } from './styled';
import { useStore } from 'hooks';
import { createCalendarView } from '../../domain';

const initialPivot = startOfMonth(new Date());

function Calendar() {
  const [pivot, setPivot] = useState(initialPivot);
  const [showSettings, setShowSettings] = useState(false);

  const [store] = useStore();
  const { schedule } = store.settings;
  const { year, month, weeks } = useMemo(
    () => createCalendarView(getYear(pivot), getMonth(pivot), schedule),
    [pivot, schedule]
  );

  return (
    <Wrapper>
      <Header
        year={year}
        month={month}
        onPrevMonth={() => setPivot(subMonths(pivot, 1))}
        onNextMonth={() => setPivot(addMonths(pivot, 1))}
      />
      <Body weeks={weeks} />
      <SettingsModal
        visible={showSettings}
        onHide={() => setShowSettings(false)}
      />
      <OpenSettingsButton onClick={() => setShowSettings(!showSettings)} />
    </Wrapper>
  );
}

export default Calendar;
