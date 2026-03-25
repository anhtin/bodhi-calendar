export type VegetarianPractice = {
  for30DayMonths: number[];
  for29DayMonths: number[];
};

const PRACTICES: VegetarianPractice[] = [
  {
    for30DayMonths: [1, 15],
    for29DayMonths: [1, 15],
  },
  {
    for30DayMonths: [1, 14, 15, 30],
    for29DayMonths: [1, 14, 15, 29],
  },
  {
    for30DayMonths: [1, 8, 14, 15, 23, 30],
    for29DayMonths: [1, 8, 14, 15, 23, 29],
  },
  {
    for30DayMonths: [1, 8, 14, 15, 18, 23, 24, 30],
    for29DayMonths: [1, 8, 14, 15, 18, 23, 24, 29],
  },
  {
    for30DayMonths: [1, 8, 14, 15, 18, 23, 24, 28, 29, 30],
    for29DayMonths: [1, 8, 14, 15, 18, 23, 24, 27, 28, 29],
  },
];

export function resolveVegetarianPractice(id: number) {
  return PRACTICES[id] ?? PRACTICES[0];
}

export function getAllVegetarianPractices(): VegetarianPractice[] {
  return PRACTICES;
}
