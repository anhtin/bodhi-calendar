import { SolarLunarDate } from 'solarlunar';

export interface Configuration {
  schedule: VegetarianSchedule;
}

export interface VegetarianSchedule {
  name: string;
  pred: VegetarianDayPredicate;
};

export type VegetarianDayPredicate = (date: SolarLunarDate) => boolean;