declare module 'amlich.js' {
  export type SolarDate = {
    day: number;
    month: number;
    year: number;
  };

  export type LunarDate = {
    lunarDay: number;
    lunarMonth: number;
    lunarYear: number;
    lunarLeap: boolean;
  };

  export function computeDateToLunarDate(
    day: number,
    month: number,
    year: number,
    timezone: number,
  ): LunarDate;

  export function computeDateFromLunarDate(
    day: number,
    month: number,
    year: number,
    isLeapYear: boolean,
    timezone: number,
  ): SolarDate;
}
