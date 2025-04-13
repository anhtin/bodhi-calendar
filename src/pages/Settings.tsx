import useSWR from 'swr';

import { resolveSettings, updateSettings } from '@/data/settings';
import { getAllVegetarianSchedules } from '@/data/vegetarian';

export function Settings() {
  const {
    data: settings,
    error: settingsError,
    mutate: mutateSettings,
  } = useSWR('settings', resolveSettings);

  if (settingsError) throw settingsError;

  if (settings == null) return <p className="text-center">Loading...</p>;

  const handleSelect = (scheduleId: number) => {
    const newSettings = {
      ...settings,
      vegetarian: {
        ...settings.vegetarian,
        scheduleId,
      },
    };
    updateSettings(newSettings);
    mutateSettings(newSettings);
  };

  return (
    <div className="w-[300px] m-auto">
      <h1 className="text-4xl text-center font-bold mb-2">Settings</h1>
      <form className="flex flex-col">
        <label className="text-lg font-bold mb-[0.25em]">Schedule</label>
        <select
          className="bg-white p-[0.5em] border border-[#3b3b3b] rounded-sm"
          value={settings.vegetarian.scheduleId}
          onChange={(e) => handleSelect(+e.target.value)}
        >
          {getAllVegetarianSchedules().map((x, i) => (
            <option key={i} value={i}>
              {x.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
