import { Entity, SingleValueObject } from '../patterns';
import { LunarDate } from './lunisolar';

export class VegetarianSchedule extends Entity<VegetarianScheduleId> {
  constructor(
    readonly id: VegetarianScheduleId,
    readonly name: VegetarianScheduleName,
    private readonly vegetarianDaysInMonth: VegetarianDaysInMonth
  ) {
    super(id);
  }

  isVegetarianDate(lunarDate: LunarDate): boolean {
    const discriminator = lunarDate.has30DaysInMonth()
      ? 'for30DayMonth'
      : 'for29DayMonth';
    const vegetarianDaysInMonth = this.vegetarianDaysInMonth[discriminator];
    return vegetarianDaysInMonth.includes(new LunarMonthDay(lunarDate.day));
  }
}

export class VegetarianScheduleId extends SingleValueObject<number> {}

export class VegetarianScheduleName extends SingleValueObject<string> {}

export type VegetarianDaysInMonth = {
  for30DayMonth: Array<LunarMonthDay>;
  for29DayMonth: Array<LunarMonthDay>;
};

export class LunarMonthDay extends SingleValueObject<number> {
  constructor(readonly value: number) {
    super(value);
    if (value < 1 || value > 30) {
      throw new Error('Invalid lunar month day');
    }
  }
}
