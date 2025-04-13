import { Locale, addDays, getMonth, startOfWeek } from 'date-fns';

export function resolveWeeksInMonthView(
  monthIndex: number,
  year: number,
  locale: Locale,
): Date[][] {
  const firstDayOfMonth = new Date(year, monthIndex, 1);
  const firstDayOfFirstWeek = startOfWeek(firstDayOfMonth, { locale });

  const weeks = [];
  let cursor = firstDayOfFirstWeek;
  do {
    const week = [];
    for (let dayNo = 0; dayNo < 7; dayNo++, cursor = addDays(cursor, 1)) {
      week.push(cursor);
    }
    weeks.push(week);
  } while (getMonth(cursor) == monthIndex);

  return weeks;
}
