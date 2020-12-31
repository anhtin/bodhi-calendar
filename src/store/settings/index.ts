import {
  getVegetarianSchedule,
  setVegetarianSchedule,
  VegetarianSchedule,
} from './vegetarian';

export type Settings = {
  schedule: VegetarianSchedule;
};

export function saveSettings(settings: Settings) {
  setVegetarianSchedule(settings.schedule);
}

export function loadSettings() {
  return {
    schedule: getVegetarianSchedule(),
  };
}

export * from './vegetarian';
