import { SolarLunarDate } from 'solarlunar';

export interface Settings {
  schedule: VegetarianSchedule;
}

export interface VegetarianSchedule {
  name: string;
  pred: VegetarianDayPredicate;
};

type VegetarianDayPredicate = (date: SolarLunarDate) => boolean;