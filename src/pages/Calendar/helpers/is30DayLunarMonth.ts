import { LunarDate } from 'amlich.js';
import { addDays } from 'date-fns';

import { resolveLunarDate, resolveSolarDate } from './lunisolar';

export function is30DayLunarMonth(lunarDate: LunarDate): boolean {
  const daysUntilEndOfLunarMonth = 30 - lunarDate.lunarDay;
  const endOfLunarMonth = resolveLunarDate(
    addDays(resolveSolarDate(lunarDate), daysUntilEndOfLunarMonth),
  );
  return endOfLunarMonth.lunarDay === 30;
}
