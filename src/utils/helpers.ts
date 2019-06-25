import { VegetarianSchedule } from 'utils/types';
import { getVegetarianSchedules } from 'utils/store';

export function findScheduleByName(
  name: string
): VegetarianSchedule | undefined {
  return getVegetarianSchedules().find((schedule): boolean =>
    schedule.name === name
  );
}

export function composeCssClasses(classes: (string | null)[]): string {
  return classes.filter((cls): boolean => cls !== null).join(' ');
}