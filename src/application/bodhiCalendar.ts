import { addDays, isAfter } from 'date-fns';

import { LunarDate, SolarDate } from '../domain';
import { SettingsRepository, VegetarianScheduleRepository } from './ports';

export type BodhiCalendarDate = {
  solarDate: SolarDate;
  lunarDate: LunarDate;
  isVegetarian: boolean;
};

export class BodhiCalendarService {
  constructor(
    private readonly settingsRepository: SettingsRepository,
    private readonly vegetarianScheduleRepository: VegetarianScheduleRepository
  ) {}

  getDatesBetween(startDate: Date, endDate: Date): Array<BodhiCalendarDate> {
    if (isAfter(startDate, endDate))
      throw new Error('start date cannot be after end date');

    const dates = [];
    let current = startDate;
    do {
      const date = this.createCalendarDate(current);
      dates.push(date);
      current = addDays(current, 1);
    } while (!isAfter(current, endDate));

    return dates;
  }

  private createCalendarDate(date: Date): BodhiCalendarDate {
    const {
      vegetarian: { scheduleId },
    } = this.settingsRepository.get();

    const schedule = this.vegetarianScheduleRepository.getById(scheduleId);
    if (schedule == null)
      throw new Error(`Failed to resolve schedule with ID ${scheduleId.value}`);

    const solarDate = SolarDate.fromDate(date);
    const lunarDate = LunarDate.fromDate(date);
    return {
      solarDate,
      lunarDate,
      isVegetarian: schedule.isVegetarianDate(lunarDate),
    };
  }
}
