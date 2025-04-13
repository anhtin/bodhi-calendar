import { addDays } from 'date-fns';

import { resolveLunarDate } from './resolveLunarDate';

export function is30DayLunarMonth(date: Date): boolean {
  const daysUntilEndOfLunarMonth = 30 - resolveLunarDate(date).lunarDay;
  const endOfLunarMonth = resolveLunarDate(
    addDays(date, daysUntilEndOfLunarMonth),
  );
  return endOfLunarMonth.lunarDay === 30;
}
