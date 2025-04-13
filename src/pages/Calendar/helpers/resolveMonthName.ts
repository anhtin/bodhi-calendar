import { Locale, Month } from 'date-fns';

export function resolveMonthName(monthIndex: number, locale: Locale): string {
  return locale.localize.month(monthIndex as Month);
}
