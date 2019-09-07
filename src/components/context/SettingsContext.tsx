import React from 'react';
import { useState, createContext, HTMLProps } from 'react';

import { Settings, MutableContextUpdate } from 'types';
import { getVegetarianSchedule } from 'utils/store';

const initialSettings: Settings = { schedule: getVegetarianSchedule() };
const SettingsContext = createContext([
  initialSettings,
  (() => { }) as MutableContextUpdate<Settings>
]);

export function SettingsProvider({ children }: HTMLProps<HTMLElement>) {
  const [settings, setSettings] = useState(initialSettings);
  return (
    <SettingsContext.Provider value={[settings, setSettings]}>
      {children}
    </SettingsContext.Provider>
  );
}

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
