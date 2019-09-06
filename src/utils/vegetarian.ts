import solarLunar, { SolarLunarDate } from 'solarlunar';

import { VegetarianSchedule } from 'types';

function checkMonthlySchedule(
  date: SolarLunarDate,
  days30: number[],
  days29: number[]
): boolean {
  if (solarLunar.monthDays(date.lYear, date.lMonth) === 29) {
    return days29.includes(date.lDay);
  }
  return days30.includes(date.lDay);
}

export const defaultVegetarianSchedules: VegetarianSchedule[] = [
  {
    name: "10 days a month",
    pred: (date: SolarLunarDate): boolean => (
      checkMonthlySchedule(
        date,
        [1, 8, 14, 15, 18, 23, 24, 28, 29, 30],
        [1, 8, 14, 15, 18, 23, 24, 27, 28, 29]
      )
    )
  },
  {
    name: "8 days a month",
    pred: (date: SolarLunarDate): boolean => (
      checkMonthlySchedule(
        date,
        [1, 8, 14, 15, 18, 23, 24, 30],
        [1, 8, 14, 15, 18, 23, 24, 29]
      )
    ),
  },
  {
    name: "6 days a month",
    pred: (date: SolarLunarDate): boolean => (
      checkMonthlySchedule(
        date,
        [8, 14, 15, 18, 23, 29, 30],
        [8, 14, 15, 18, 23, 28, 29]
      )
    ),
  },
  {
    name: "4 days a month",
    pred: (date: SolarLunarDate): boolean => (
      checkMonthlySchedule(
        date,
        [1, 14, 15, 30],
        [1, 14, 15, 29]
      )
    ),
  },
  {
    name: "2 days a month",
    pred: (date: SolarLunarDate): boolean => (
      checkMonthlySchedule(
        date,
        [1, 15],
        [1, 15]
      )
    ),
  },
];