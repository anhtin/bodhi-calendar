import { Day, Locale } from 'date-fns';

export function resolveWeekDayNames(locale: Locale): string[] {
  const weekDayIndices: Day[] = [0, 1, 2, 3, 4, 5, 6];
  const firstWeekDayIndex = locale.options?.weekStartsOn ?? 0;
  const localizedWeekDayIndices = weekDayIndices
    .slice(firstWeekDayIndex)
    .concat(weekDayIndices.slice(0, firstWeekDayIndex));
  return localizedWeekDayIndices.map((x) =>
    locale.localize.day(x, {
      width: locale.code === 'vi' ? 'short' : 'abbreviated',
    }),
  );
}
