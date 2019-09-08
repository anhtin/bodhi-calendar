import React, { useState } from 'react';

import Body from './components/Body';
import Header from './components/Header';
import OpenSettingsButton from './components/OpenSettingsButton';
import SettingsModal from './components/SettingsModal';
import { useDate } from 'hooks/contexts';
import styles from './Calendar.module.scss';

function Calendar() {
  const currentDate = useDate()
  const [displayDate, setDisplayDate] = useState(currentDate.startOf('month'));
  const [showSettings, setShowSettings] = useState(false);

  const onPrevMonth = () => setDisplayDate(displayDate.minus({ months: 1 }));
  const onNextMonth = () => setDisplayDate(displayDate.plus({ months: 1 }));

  return (
    <div className={styles.calendar}>
      <Header {...{ displayDate, onPrevMonth, onNextMonth }} />
      <Body displayDate={displayDate} />
      <SettingsModal
        visible={showSettings}
        onHide={() => setShowSettings(false)}
      />
      <OpenSettingsButton onClick={() => setShowSettings(true)} />
    </div>
  );
}

export default Calendar;
