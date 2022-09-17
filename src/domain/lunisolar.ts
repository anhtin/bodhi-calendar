import { computeDateFromLunarDate, computeDateToLunarDate } from 'amlich.js';
import { getDate, getMonth, getYear } from 'date-fns';
import addDays from 'date-fns/addDays';

import { ValueObject } from '../patterns';

const TIME_ZONE_OFFSET = 7;

export class SolarDate extends ValueObject {
  constructor(
    readonly year: number,
    readonly month: number,
    readonly day: number
  ) {
    super();
  }

  static fromDate(date: Date): SolarDate {
    return new SolarDate(getYear(date), getMonth(date) + 1, getDate(date));
  }

  static fromLunarDate(lunarDate: LunarDate): SolarDate {
    const date = computeDateFromLunarDate(
      lunarDate.day,
      lunarDate.month,
      lunarDate.year,
      lunarDate.isLeapYear,
      TIME_ZONE_OFFSET
    );
    return new SolarDate(date.year, date.month + 1, date.day);
  }

  toDate(): Date {
    return new Date(this.year, this.month - 1, this.day);
  }

  toLunarDate(): LunarDate {
    return LunarDate.fromSolarDate(this);
  }
}

export class LunarDate extends ValueObject {
  constructor(
    readonly year: number,
    readonly month: number,
    readonly day: number,
    readonly isLeapYear: boolean
  ) {
    super();
  }

  static fromDate(date: Date): LunarDate {
    return SolarDate.fromDate(date).toLunarDate();
  }

  static fromSolarDate(solarDate: SolarDate): LunarDate {
    const date = computeDateToLunarDate(
      solarDate.day,
      solarDate.month,
      solarDate.year,
      TIME_ZONE_OFFSET
    );
    return new LunarDate(
      date.lunarYear,
      date.lunarMonth,
      date.lunarDay,
      date.lunarLeap
    );
  }

  toSolarDate(): SolarDate {
    return SolarDate.fromLunarDate(this);
  }

  toDate(): Date {
    const solarDate = SolarDate.fromLunarDate(this);
    return solarDate.toDate();
  }

  has30DaysInMonth(): boolean {
    const delta = 30 - this.day;
    const lastDateInMonth = this.plusDays(delta);
    return lastDateInMonth.day === 30;
  }

  private plusDays(numDays: number): LunarDate {
    const newDate = addDays(this.toDate(), numDays);
    return LunarDate.fromDate(newDate);
  }
}
