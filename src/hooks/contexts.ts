import { useContext } from 'react';
import { DateTime } from 'luxon';

import DateContext from 'components/context/DateContext';
import SettingsContext from 'components/context/SettingsContext';
import { Settings, MutableContextValue } from 'types';

const useDate = (): DateTime => useContext(DateContext)

const useSettings = (): MutableContextValue<Settings> => (
  useContext(SettingsContext) as MutableContextValue<Settings>
);

export {
  useDate,
  useSettings,
};