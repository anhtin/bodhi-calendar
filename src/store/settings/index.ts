import { setVegetarianSchedule, VegetarianSchedule } from './vegetarian';

export interface Settings {
  schedule: VegetarianSchedule;
}

export function saveSettings(settings: Settings) {
  setVegetarianSchedule(settings.schedule);
}

export * from './vegetarian';