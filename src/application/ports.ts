import { Locale, format, isBefore, isSameDay, parseISO } from 'date-fns';

import { VegetarianSchedule, VegetarianScheduleId } from '../domain';
import { Settings } from './settings';

export interface SettingsRepository {
  get(): Settings;
  save(settings: Settings): void;
}

export interface VegetarianScheduleRepository {
  getAll(): Array<VegetarianSchedule>;
  getById(id: VegetarianScheduleId): VegetarianSchedule | undefined;
}

export interface LocaleProvider {
  get(): Promise<Locale | undefined>;
}

export interface VersionProvider {
  get(): Version;
}

export class Version {
  private readonly date: Date;
  private readonly count: number;

  constructor(versionString: string) {
    const [dateString, count] = versionString.split('.');
    this.date = parseISO(dateString);
    this.count = +count;
  }

  isLowerThan(other: Version): boolean {
    return (
      isBefore(this.date, other.date) ||
      (isSameDay(this.date, other.date) && this.count < other.count)
    );
  }

  equals(other: Version): boolean {
    return isSameDay(this.date, other.date) && this.count === other.count;
  }

  toString(): string {
    return `${format(this.date, 'yyyy-MM-dd')}.${this.count}`;
  }
}

export interface Logger {
  logError(error: Error): void;
}
