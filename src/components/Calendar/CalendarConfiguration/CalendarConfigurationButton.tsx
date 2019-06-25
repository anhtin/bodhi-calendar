import React from 'react';

import './style.scss';

export interface CalendarConfigurationButtonProps {
  onClick: () => void;
}

export const CalendarConfigurationButton = ({
  onClick
}: CalendarConfigurationButtonProps) => (
  <div className="configuration-button" onClick={onClick}>⚙</div>
);