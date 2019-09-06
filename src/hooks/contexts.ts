import { useContext, Dispatch, SetStateAction } from 'react';
import { DateTime } from 'luxon';

import DateContext from 'components/context/DateContext';
import SettingsContext from 'components/context/SettingsContext';
import { Settings } from 'types';

const useDate = (): DateTime => useContext(DateContext)
const useSettings = (): [Settings, Dispatch<SetStateAction<Settings>>] => (
  useContext(SettingsContext) as [Settings, Dispatch<SetStateAction<Settings>>]
);

export {
  useDate,
  useSettings,
};