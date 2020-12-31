declare module 'solarlunar' {
  export type SolarLunar = {
    lunarInfo: number[];
    solarMonth: number[];
    gan: string[];
    zhi: string[];
    animals: string[];
    lunarTerm: string[];
    lTermInfo: string[];
    nStr1: string[];
    nStr2: string[];
    nStr3: string[];
    nStr4: string[];
    lYearDays: (year: number) => number;
    leapMonth: (year: number) => number;
    leapDays: (year: number) => number;
    monthDays: (year: number, month: number) => number;
    solarDays: (year: number, month: number) => number;
    toGanZhi: (offset: number) => string;
    getTerm: (year: number, n: number) => number;
    toChinaYear: (year: number) => number;
    toChinaMonth: (month: number) => string | number;
    toChinaDay: (day: number) => string;
    getAnimal: (year: number) => string;
    solar2lunar: (year: number, month: number, day: number) => SolarLunarDate;
    lunar2solar: (
      year: number,
      month: number,
      day: number,
      isLeapMonth: boolean
    ) => SolarLunarDate;
  };

  export type SolarLunarDate = {
    lYear: number;
    lMonth: number;
    lDay: number;
    animal: string;
    animal: string;
    monthCn: string;
    cYear: number;
    cMonth: number;
    cDay: number;
    gzYear: string;
    gzMonth: string;
    gzDay: string;
    isToday: boolean;
    isLeap: boolean;
    nWeek: number;
    term: string;
  };

  const solarLunar: SolarLunar;

  export default solarLunar;
}
