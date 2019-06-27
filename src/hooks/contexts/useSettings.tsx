import { useContext, createContext } from 'react';

import { Settings as SettingsType } from 'types';
import { getVegetarianSchedule } from 'utils/store';

const useSettings = () => useContext(Settings);

const initialSettings: SettingsType = { schedule: getVegetarianSchedule() };
const Settings = createContext(initialSettings);

export default useSettings;
