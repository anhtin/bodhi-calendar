import { SettingsRepository } from '../application';
import { VegetarianScheduleId } from '../domain';
import { VegetarianScheduleRepository } from './ports';

type SettingsOption<T> = {
  name: string;
  value: T;
};

type SettingsOptions = {
  vegetarian: {
    scheduleId: Array<SettingsOption<VegetarianScheduleId>>;
  };
};

export type Settings = {
  vegetarian: {
    scheduleId: VegetarianScheduleId;
  };
};

export class SettingsService {
  constructor(
    private readonly settingsRepository: SettingsRepository,
    private readonly vegetarianScheduleRepository: VegetarianScheduleRepository
  ) {}

  getCurrent(): Settings {
    return this.settingsRepository.get();
  }

  getOptions(): SettingsOptions {
    const scheduleOptions = this.vegetarianScheduleRepository.getAll();
    return {
      vegetarian: {
        scheduleId: scheduleOptions.map((schedule) => ({
          name: schedule.name.value,
          value: schedule.id,
        })),
      },
    };
  }

  update(settings: Settings): void {
    this.settingsRepository.save(settings);
  }
}
