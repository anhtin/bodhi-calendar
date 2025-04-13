import {
  LunarDate,
  computeDateFromLunarDate,
  computeDateToLunarDate,
} from 'amlich.js';
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

export function resolveSolarDate(lunarDate: LunarDate): Date {
  const solarDate = computeDateFromLunarDate(
    lunarDate.lunarDay,
    lunarDate.lunarMonth,
    lunarDate.lunarYear,
    lunarDate.lunarLeap,
    VIETNAMESE_TIME_ZONE_OFFSET,
  );
  return new Date(solarDate.year, solarDate.month, solarDate.day);
}
