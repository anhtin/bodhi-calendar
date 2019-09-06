import { getVegetarianSchedules } from 'utils/store';

import { VegetarianSchedule } from 'types';

export function findScheduleByName(
  name: string
): VegetarianSchedule | undefined {
  return getVegetarianSchedules().find((schedule): boolean =>
    schedule.name === name
  );
}

export function composeCssClasses(classes: (string | false)[]): string {
  return classes.filter((cls): boolean => cls !== false).join(' ');
}
