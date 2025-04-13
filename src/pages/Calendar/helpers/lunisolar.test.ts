import { LunarDate } from 'amlich.js';
import { describe, expect, test } from 'vitest';

import { resolveLunarDate, resolveSolarDate } from './lunisolar';

describe(resolveLunarDate.name, () => {
  test.each([
    [2025, 2, 28, 2025, 2, 29, false],
    [2025, 2, 29, 2025, 3, 1, false],
    [2025, 3, 1, 2025, 3, 4, false],
    [2025, 3, 27, 2025, 3, 30, false],
    [2025, 3, 28, 2025, 4, 1, false],
    [2023, 2, 21, 2023, 2, 30, false],
    [2023, 2, 22, 2023, 2, 1, true],
    [2023, 3, 19, 2023, 2, 29, true],
    [2023, 3, 20, 2023, 3, 1, false],
    [2025, 6, 24, 2025, 6, 30, false],
    [2025, 6, 25, 2025, 6, 1, true],
    [2025, 7, 22, 2025, 6, 29, true],
    [2025, 7, 23, 2025, 7, 1, false],
  ])(
    'returns correct lunar date (year=%i, monthIndex=%i, day=%i)',
    (
      year,
      monthIndex,
      day,
      expectedYear,
      expectedMonth,
      expectedDay,
      expectedIsLeapMonth,
    ) => {
      const actual = resolveLunarDate(new Date(year, monthIndex, day));
      expect(actual).toEqual({
        lunarYear: expectedYear,
        lunarMonth: expectedMonth,
        lunarDay: expectedDay,
        lunarLeap: expectedIsLeapMonth,
      } as LunarDate);
    },
  );
});

describe(resolveSolarDate.name, () => {
  test.each([
    [2025, 2, 29, false, 2025, 2, 28],
    [2025, 3, 1, false, 2025, 2, 29],
    [2025, 3, 4, false, 2025, 3, 1],
    [2025, 3, 30, false, 2025, 3, 27],
    [2025, 4, 1, false, 2025, 3, 28],
    [2023, 2, 30, false, 2023, 2, 21],
    [2023, 2, 1, true, 2023, 2, 22],
    [2023, 2, 29, true, 2023, 3, 19],
    [2023, 3, 1, false, 2023, 3, 20],
    [2025, 6, 30, false, 2025, 6, 24],
    [2025, 6, 1, true, 2025, 6, 25],
    [2025, 6, 29, true, 2025, 7, 22],
    [2025, 7, 1, false, 2025, 7, 23],
  ])(
    'returns correct lunar date (year=%i, monthIndex=%i, day=%i, isLeapMonth=%b)',
    (
      year,
      month,
      day,
      isLeapMonth,
      expectedYear,
      expectedMonthIndex,
      expectedDay,
    ) => {
      const actual = resolveSolarDate({
        lunarYear: year,
        lunarMonth: month,
        lunarDay: day,
        lunarLeap: isLeapMonth,
      } as LunarDate);
      expect(actual).toEqual(
        new Date(expectedYear, expectedMonthIndex, expectedDay),
      );
    },
  );
});
