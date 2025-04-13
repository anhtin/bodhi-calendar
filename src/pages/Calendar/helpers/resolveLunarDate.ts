import { LunarDate, computeDateToLunarDate } from 'amlich.js';
import { getDate, getMonth, getYear } from 'date-fns';

const VIETNAMESE_TIME_ZONE_OFFSET = 7;

export function resolveLunarDate(date: Date): LunarDate {
  return computeDateToLunarDate(
    getDate(date),
    getMonth(date) + 1,
    getYear(date),
    VIETNAMESE_TIME_ZONE_OFFSET,
  );
}
