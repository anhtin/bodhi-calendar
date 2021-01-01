import { format, formatISO, parseISO, startOfWeek } from 'date-fns';
import { getUserLocale } from 'get-user-locale';

const userLocale = getUserLocale();

const locale = () => require(`date-fns/locale/${userLocale}`).default;

export const WEEK_DAYS: Array<string> = [0, 1, 2, 3, 4, 5, 6].map((day) =>
  locale().localize.day(day, { width: 'abbreviated' })
);

export function formatDate(date: Date, pattern: string): string {
  return format(date, pattern, { locale: locale() });
}

export function formatISODate(date: Date): string {
  return formatISO(date);
}

export function parseISODate(date: string): Date {
  return parseISO(date);
}

export function getStartOfWeek(date: Date) {
  return startOfWeek(date, { locale: locale() });
}
