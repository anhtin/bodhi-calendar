import { LunarDate } from 'amlich.js';
import { describe, expect, test } from 'vitest';

import { is30DayLunarMonth } from './is30DayLunarMonth';

describe(is30DayLunarMonth.name, () => {
  test.each([
    [2025, 3, 1, false],
    [2025, 3, 15, false],
    [2025, 3, 29, false],
    [2025, 3, 30, false],
    [2024, 11, 1, false],
    [2024, 11, 15, false],
    [2024, 11, 29, false],
    [2024, 11, 30, false],
    [2024, 10, 1, false],
    [2024, 10, 15, false],
    [2024, 10, 29, false],
    [2024, 10, 30, false],
    [2025, 6, 1, false],
    [2025, 6, 15, false],
    [2025, 6, 29, false],
    [2025, 6, 30, false],
    [2017, 6, 1, true],
    [2017, 6, 15, true],
    [2017, 6, 29, true],
    [2017, 6, 30, true],
  ])(
    'returns true when lunar month has 30 days (year=%i, monthIndex=%i, day=%i)',
    (year, month, day, isLeapMonth) => {
      const actual = is30DayLunarMonth({
        lunarYear: year,
        lunarMonth: month,
        lunarDay: day,
        lunarLeap: isLeapMonth,
      } as LunarDate);
      expect(actual).toBe(true);
    },
  );

  test.each([
    [2025, 2, 1, false],
    [2025, 2, 15, false],
    [2025, 2, 29, false],
    [2025, 4, 1, false],
    [2025, 4, 15, false],
    [2025, 4, 29, false],
    [2025, 5, 1, false],
    [2025, 5, 15, false],
    [2025, 5, 29, false],
    [2025, 6, 1, true],
    [2025, 6, 15, true],
    [2025, 6, 29, true],
  ])(
    'returns false when lunar month has 29 days (year=%i, monthIndex=%i, day=%i)',
    (year, month, day, isLeapMonth) => {
      const actual = is30DayLunarMonth({
        lunarYear: year,
        lunarMonth: month,
        lunarDay: day,
        lunarLeap: isLeapMonth,
      } as LunarDate);
      expect(actual).toBe(false);
    },
  );
});
