import React from 'react';
import { DateTime } from 'luxon';

import Flex from 'components/Flex';
import { Configuration } from 'utils/types';
import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';
import CalendarConfiguration, { CalendarConfigurationButton } from './CalendarConfiguration';

export interface CalendarViewProps {
  currentDate: DateTime;
  displayDate: DateTime;
  config: Configuration;
  showConfig: boolean;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onShowConfiguration: () => void;
  onHideConfiguration: () => void;
  onUpdateConfiguration: (config: Configuration) => void;
}

const CalendarView = ({
  currentDate,
  displayDate,
  config,
  showConfig,
  onPrevMonth,
  onNextMonth,
  onShowConfiguration,
  onHideConfiguration,
  onUpdateConfiguration,
}: CalendarViewProps) => (
  <Flex
    direction="column"
    justifyContent="space-around"
    alignItems="space-around"
  >
      <CalendarHeader
        displayDate={displayDate}
        onPrevMonth={onPrevMonth}
        onNextMonth={onNextMonth}
      />
      <CalendarBody
        currentDate={currentDate}
        displayDate={displayDate}
        pred={config.schedule.pred}
      />
    <CalendarConfiguration
      visible={showConfig}
      onHide={onHideConfiguration}
      config={config}
      onUpdate={onUpdateConfiguration}
    />
    <CalendarConfigurationButton
      onClick={onShowConfiguration}
    />
  </Flex>
);

export default CalendarView;
