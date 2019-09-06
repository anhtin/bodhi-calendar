import React, { useState } from 'react';

import Body from './components/Body';
import Flex from 'components/Flex';
import Header from './components/Header';
import OpenSettingsButton from './components/OpenSettingsButton';
import SettingsModal from './components/SettingsModal';
import { useDate, useSettings } from 'hooks/contexts';

function Calendar() {
  const currentDate = useDate()
  const [settings, setSettings] = useSettings();
  const [displayDate, setDisplayDate] = useState(currentDate.startOf('month'));
  const [showSettings, setShowSettings] = useState(false);

  const onPrevMonth = () => setDisplayDate(displayDate.minus({ months: 1 }));
  const onNextMonth = () => setDisplayDate(displayDate.plus({ months: 1 }));

  return (
    <Flex
      direction="column"
      justifyContent="space-around"
      alignItems="space-around"
    >
      <Header {...{ displayDate, onPrevMonth, onNextMonth }} />
      <Body displayDate={displayDate} />
      <SettingsModal
        visible={showSettings}
        onHide={() => setShowSettings(false)}
        settings={settings}
        onUpdate={(newSettings) => setSettings(newSettings)}
      />
      <OpenSettingsButton onClick={() => setShowSettings(true)} />
    </Flex>
  );
}

export default Calendar;
