export type VegetarianSchedule = {
  name: string;
  pred: VegetarianDayPredicate;
};

export type VegetarianDayPredicate = (
  lunarDay: number,
  has30Days: boolean
) => boolean;
