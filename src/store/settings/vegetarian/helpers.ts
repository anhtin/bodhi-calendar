import { defaultVegetarianSchedules } from './data';

import { saveLocal, loadLocal } from 'utils/browser';
import { VegetarianSchedule } from './types';

const SCHEDULE_STORE_KEY = 'schedule';

export function setVegetarianSchedule(schedule: VegetarianSchedule): void {
  saveLocal(SCHEDULE_STORE_KEY, schedule);
}

export function getVegetarianSchedule(): VegetarianSchedule {
  const scheduleName = loadLocal(SCHEDULE_STORE_KEY);
  if (scheduleName) {
    const schedule = getVegetarianScheduleByName(scheduleName);
    if (schedule) {
      return schedule;
    }
  }

  const defaultVegetarianSchedule = defaultVegetarianSchedules[0];
  saveLocal(SCHEDULE_STORE_KEY, defaultVegetarianSchedule.name);
  return defaultVegetarianSchedule;
}

export function getVegetarianScheduleByName(
  name: string
): VegetarianSchedule | undefined {
  return getVegetarianSchedules().find((schedule): boolean =>
    schedule.name === name
  );
}

export function getVegetarianSchedules(): VegetarianSchedule[] {
  return defaultVegetarianSchedules;
}
