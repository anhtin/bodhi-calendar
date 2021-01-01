import { format, formatISO, parseISO, startOfWeek } from 'date-fns';
import enUs from 'date-fns/locale/en-US';
import nb from 'date-fns/locale/nb';
import { getUserLocales } from 'get-user-locale';

const NO_LOCALES = ['no', 'nb', 'nn'];
const locale = getUserLocales().some((locale) => NO_LOCALES.includes(locale))
  ? nb
  : enUs;

export const WEEK_DAYS: Array<string> = [0, 1, 2, 3, 4, 5, 6].map((day) =>
  locale.localize?.day(day, { width: 'abbreviated' })
);

export function formatDate(date: Date, pattern: string): string {
  return format(date, pattern, { locale });
}

export function formatISODate(date: Date): string {
  return formatISO(date);
}

export function parseISODate(date: string): Date {
  return parseISO(date);
}

export function getStartOfWeek(date: Date) {
  return startOfWeek(date, { locale });
}
