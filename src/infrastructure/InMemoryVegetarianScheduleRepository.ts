import { VegetarianScheduleRepository } from '../application';
import {
  LunarMonthDay,
  VegetarianSchedule,
  VegetarianScheduleId,
  VegetarianScheduleName,
} from '../domain';

const schedules: VegetarianSchedule[] = [
  createVegetarianSchedule(0, '2 days a month', [
    [1, 15],
    [1, 15],
  ]),
  createVegetarianSchedule(1, '4 days a month', [
    [1, 14, 15, 30],
    [1, 14, 15, 29],
  ]),
  createVegetarianSchedule(2, '6 days a month', [
    [1, 8, 14, 15, 23, 30],
    [1, 8, 14, 15, 23, 29],
  ]),
  createVegetarianSchedule(3, '8 days a month', [
    [1, 8, 14, 15, 18, 23, 24, 30],
    [1, 8, 14, 15, 18, 23, 24, 29],
  ]),
  createVegetarianSchedule(4, '10 days a month', [
    [1, 8, 14, 15, 18, 23, 24, 28, 29, 30],
    [1, 8, 14, 15, 18, 23, 24, 27, 28, 29],
  ]),
];

export class InMemoryVegetarianScheduleRepository
  implements VegetarianScheduleRepository
{
  getAll(): Array<VegetarianSchedule> {
    return schedules;
  }

  getById(id: VegetarianScheduleId): VegetarianSchedule | undefined {
    return schedules.find((schedule) => schedule.id.equals(id));
  }
}

function createVegetarianSchedule(
  id: number,
  name: string,
  days: Array<Array<number>>
): VegetarianSchedule {
  return new VegetarianSchedule(
    new VegetarianScheduleId(id),
    new VegetarianScheduleName(name),
    {
      for30DayMonth: wrapInLunarMonthDay(days[0]),
      for29DayMonth: wrapInLunarMonthDay(days[1]),
    }
  );
}

function wrapInLunarMonthDay(days: Array<number>): Array<LunarMonthDay> {
  return days.map((day) => new LunarMonthDay(day));
}
