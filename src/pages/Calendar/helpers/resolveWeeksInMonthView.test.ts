import { differenceInMilliseconds, getDaysInMonth } from 'date-fns';
import { nb as locale } from 'date-fns/locale';
import { describe, expect, test } from 'vitest';

import { resolveWeeksInMonthView } from './resolveWeeksInMonthView';

const testInputs = [
  [1, 2025],
  [0, 2025],
  [11, 2025],
  [2, 2025],
];

describe('resolveWeeksInMonthView', () => {
  test.each(testInputs)(
    'returns days in chronological order (monthIndex=%i, year=%i)',
    (monthIndex, year) => {
      const days = resolveWeeksInMonthView(monthIndex, year, locale).flat();
      const sortedDays = [...days].sort((a: Date, b: Date) =>
        differenceInMilliseconds(a, b),
      );
      expect(days).toStrictEqual(sortedDays);
    },
  );

  test.each(testInputs)(
    'returns all days in month (monthIndex=%i, year=%i)',
    (monthIndex, year) => {
      const actual = resolveWeeksInMonthView(monthIndex, year, locale).flat();

      const dayCount = getDaysInMonth(new Date(year, monthIndex, 1));
      for (let dayNo = 1; dayNo < dayCount; dayNo++) {
        expect(actual).toContainEqual(new Date(year, monthIndex, dayNo));
      }
    },
  );

  test.each([
    [
      1,
      2025,
      [
        new Date(2025, 0, 27),
        new Date(2025, 0, 28),
        new Date(2025, 0, 29),
        new Date(2025, 0, 30),
        new Date(2025, 0, 31),
      ],
    ],
    [0, 2025, [new Date(2024, 11, 30), new Date(2024, 11, 31)]],
    [11, 2025, []],
    [
      2,
      2025,
      [
        new Date(2025, 1, 24),
        new Date(2025, 1, 25),
        new Date(2025, 1, 26),
        new Date(2025, 1, 27),
        new Date(2025, 1, 28),
      ],
    ],
  ])(
    'returns leading days (monthIndex=%i, year=%i)',
    (monthIndex, year, expected) => {
      const actual = resolveWeeksInMonthView(monthIndex, year, locale).flat();
      expect(actual).toEqual(expect.arrayContaining(expected));
    },
  );

  test.each([
    [1, 2025, [new Date(2025, 2, 1), new Date(2025, 2, 2)]],
    [0, 2025, [new Date(2024, 11, 30), new Date(2024, 11, 31)]],
    [
      11,
      2025,
      [
        new Date(2026, 0, 1),
        new Date(2026, 0, 2),
        new Date(2026, 0, 3),
        new Date(2026, 0, 4),
      ],
    ],
    [
      2,
      2025,
      [
        new Date(2025, 3, 1),
        new Date(2025, 3, 2),
        new Date(2025, 3, 3),
        new Date(2025, 3, 4),
        new Date(2025, 3, 5),
        new Date(2025, 3, 5),
      ],
    ],
  ])(
    'returns trailing days (monthIndex=%i, year=%i)',
    (monthIndex, year, expected) => {
      const actual = resolveWeeksInMonthView(monthIndex, year, locale).flat();
      expect(actual).toEqual(expect.arrayContaining(expected));
    },
  );
});
