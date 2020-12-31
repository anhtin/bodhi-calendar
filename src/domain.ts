import { addDays, getDate, getMonth, getYear } from 'date-fns';
import { computeDateToLunarDate, LunarDate } from 'amlich.js';

import { getStartOfWeek } from 'utils/date';
import { VegetarianSchedule } from 'store';

export type CalendarView = {
  year: number;
  month: number;
  weeks: Array<Week>;
};

export type Week = Array<Day>;

export type Day = {
  solarDate: Date;
  lunarDay: number;
  solarDay: number;
  isVegetarianDay: boolean;
  isInMonth: boolean;
};

export function createCalendarView(
  year: number,
  month: number,
  schedule: VegetarianSchedule
): CalendarView {
  return {
    year,
    month,
    weeks: createWeeks(year, month, schedule),
  };
}

function createWeeks(
  year: number,
  month: number,
  schedule: VegetarianSchedule
): Array<Week> {
  let incDate = getStartOfWeek(new Date(year, month, 1));
  const weeks: Array<Week> = [];
  for (let i = 0; i < 5; i++) {
    const week: Week = [];
    for (let j = 0; j < 7; j++, incDate = addDays(incDate, 1)) {
      const isInMonth = getMonth(incDate) === month;
      const day = createDay(incDate, schedule, isInMonth);
      week.push(day);
    }
    weeks.push(week);
  }
  return weeks;
}

function createDay(
  date: Date,
  schedule: VegetarianSchedule,
  isInMonth: boolean
): Day {
  const year = getYear(date);
  const month = getMonth(date);
  const lunarDate = computeDateToLunarDate(getDate(date), month + 1, year, 7);
  const has30Days = of30Days(lunarDate, date);
  return {
    solarDate: date,
    lunarDay: lunarDate.lunarDay,
    solarDay: getDate(date),
    isVegetarianDay: schedule.pred(lunarDate.lunarDay, has30Days),
    isInMonth,
  };
}

function of30Days(lunarDate: LunarDate, gregorianDate: Date): boolean {
  const diff = 30 - lunarDate.lunarDay;
  const deltaGregorianDate = addDays(gregorianDate, diff);
  const endLunarDate = computeDateToLunarDate(
    getDate(deltaGregorianDate),
    getMonth(deltaGregorianDate) + 1,
    getYear(deltaGregorianDate),
    1
  );
  return endLunarDate.lunarDay === 30;
}
