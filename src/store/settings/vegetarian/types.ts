import { SolarLunarDate } from 'solarlunar';

export type VegetarianSchedule = {
  name: string;
  pred: VegetarianDayPredicate;
};

export type VegetarianDayPredicate = (date: SolarLunarDate) => boolean;
