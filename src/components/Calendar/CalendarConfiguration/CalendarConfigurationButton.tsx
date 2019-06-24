import React, { CSSProperties } from 'react';

export interface CalendarConfigurationButtonProps {
  onClick: () => void;
}

export const CalendarConfigurationButton = (
  props: CalendarConfigurationButtonProps
) => (
  <div style={style} {...props}>⚙</div>
);

const style: CSSProperties = {
  fontSize: '4rem',
  position: 'fixed',
  bottom: '1vh',
  alignSelf: 'flex-end',
  justifyContent: 'center',
  alignItems: 'center',
  userSelect: 'none',
  cursor: 'pointer',
};