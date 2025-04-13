export type VegetarianSchedule = {
  name: string;
  for30DayMonths: number[];
  for29DayMonths: number[];
};

const SCHEDULES: VegetarianSchedule[] = [
  {
    name: '2 days a month',
    for30DayMonths: [1, 15],
    for29DayMonths: [1, 15],
  },
  {
    name: '4 days a month',
    for30DayMonths: [1, 14, 15, 30],
    for29DayMonths: [1, 14, 15, 29],
  },
  {
    name: '6 days a month',
    for30DayMonths: [1, 8, 14, 15, 23, 30],
    for29DayMonths: [1, 8, 14, 15, 23, 29],
  },
  {
    name: '8 days a month',
    for30DayMonths: [1, 8, 14, 15, 18, 23, 24, 30],
    for29DayMonths: [1, 8, 14, 15, 18, 23, 24, 29],
  },
  {
    name: '10 days a month',
    for30DayMonths: [1, 8, 14, 15, 18, 23, 24, 28, 29, 30],
    for29DayMonths: [1, 8, 14, 15, 18, 23, 24, 27, 28, 29],
  },
];

export function resolveVegetarianSchedule(id: number) {
  return SCHEDULES[id];
}

export function getAllVegetarianSchedules(): VegetarianSchedule[] {
  return SCHEDULES;
}
