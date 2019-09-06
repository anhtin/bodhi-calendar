import React from 'react';
import { useState, createContext, HTMLProps, Dispatch, SetStateAction } from 'react';

import { Settings } from 'types';
import { getVegetarianSchedule } from 'utils/store';

const initialSettings: Settings = { schedule: getVegetarianSchedule() };
const SettingsContext = createContext([
  initialSettings,
  (() => { }) as Dispatch<SetStateAction<Settings>>
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
