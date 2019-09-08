import { defaultVegetarianSchedules } from './data';

import { VegetarianSchedule } from './types';

export function setVegetarianSchedule(schedule: VegetarianSchedule): void {
  if (localStorage) {
    localStorage.setItem('schedule', schedule.name);
  }
}

export function getVegetarianSchedule(): VegetarianSchedule {
  if (localStorage) {
    const scheduleName = localStorage.getItem('schedule');
    if (scheduleName) {
      const schedule = getVegetarianScheduleByName(scheduleName);
      if (schedule) return schedule;
    }
  }

  const defaultVegetarianSchedule = defaultVegetarianSchedules[0];
  localStorage.setItem('schedule', defaultVegetarianSchedule.name);
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
