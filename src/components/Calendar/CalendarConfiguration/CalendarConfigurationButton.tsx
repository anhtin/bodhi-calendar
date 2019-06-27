import React from 'react';

import './style.scss';

export interface CalendarConfigurationButtonProps {
  onClick: () => void;
}

const CalendarConfigurationButton = ({
  onClick
}: CalendarConfigurationButtonProps) => (
  <div className="configuration-button" onClick={onClick}>⚙</div>
);

export default CalendarConfigurationButton;
