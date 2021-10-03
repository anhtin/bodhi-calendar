import { VegetarianSchedule } from './types';

export const defaultVegetarianSchedules: VegetarianSchedule[] = [
  {
    name: '10 days a month',
    pred: (day: number, has30Days: boolean): boolean =>
      isVegetarianDay(
        day,
        has30Days
          ? [1, 8, 14, 15, 18, 23, 24, 28, 29, 30]
          : [1, 8, 14, 15, 18, 23, 24, 27, 28, 29]
      ),
  },
  {
    name: '8 days a month',
    pred: (day: number, has30Days: boolean): boolean =>
      isVegetarianDay(
        day,
        has30Days
          ? [1, 8, 14, 15, 18, 23, 24, 30]
          : [1, 8, 14, 15, 18, 23, 24, 29]
      ),
  },
  {
    name: '6 days a month',
    pred: (day: number, has30Days: boolean): boolean =>
      isVegetarianDay(
        day,
        has30Days ? [1, 8, 14, 15, 29, 30] : [1, 8, 14, 15, 28, 29]
      ),
  },
  {
    name: '4 days a month',
    pred: (day: number, has30Days: boolean): boolean =>
      isVegetarianDay(day, has30Days ? [1, 14, 15, 30] : [1, 14, 15, 29]),
  },
  {
    name: '2 days a month',
    pred: (day: number, has30Days: boolean): boolean =>
      isVegetarianDay(day, has30Days ? [1, 15] : [1, 15]),
  },
];

function isVegetarianDay(day: number, vegetarianDays: number[]): boolean {
  return vegetarianDays.includes(day);
}
