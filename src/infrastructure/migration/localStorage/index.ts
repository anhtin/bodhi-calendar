import { migrate_from_0_to_1 } from './migrate_from_0_to_1';

export function migrate() {
  if (
    localStorage.getItem('version') !== null ||
    localStorage.getItem('schedule') !== null
  )
    migrate_from_0_to_1();
}
