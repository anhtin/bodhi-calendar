import { format, startOfWeek } from 'date-fns';
import nb from 'date-fns/locale/nb';

export const WEEK_DAYS = [0, 1, 2, 3, 4, 5, 6].map(
  (day) => nb.localize && nb.localize.day(day, { width: 'abbreviated' })
);

export function formatDate(date: Date, pattern: string): string {
  return format(date, pattern, { locale: nb });
}

export function getStartOfWeek(date: Date) {
  return startOfWeek(date, { locale: nb });
}
