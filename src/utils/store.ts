import { defaultVegetarianSchedules } from './vegetarian';
import { VegetarianSchedule } from 'utils/types';
import { findScheduleByName } from './helpers';

export function getVegetarianSchedule(): VegetarianSchedule {
  if (localStorage) {
    const scheduleName = localStorage.getItem('schedule');
    if (scheduleName) {
      const schedule = findScheduleByName(scheduleName);
      if (schedule) return schedule;
    }
  }

  const defaultVegetarianSchedule = defaultVegetarianSchedules[0];
  localStorage.setItem('schedule', defaultVegetarianSchedule.name);
  return defaultVegetarianSchedule;
}

export function getVegetarianSchedules(): VegetarianSchedule[] {
  return defaultVegetarianSchedules;
}

export function setVegetarianSchedule(schedule: VegetarianSchedule): void {
  if (localStorage) {
    localStorage.setItem('schedule', schedule.name);
  }
}

export function initializeStore(): void {
  if (localStorage) {
    const currVersion = '0.0.1';
    const prevVersion = localStorage.getItem('version');

    if (prevVersion !== null && prevVersion < currVersion) {
      // Migration code (future work)
    }

    localStorage.setItem('version', currVersion);
  }
}