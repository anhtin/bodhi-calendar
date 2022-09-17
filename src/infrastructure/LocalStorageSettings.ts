import { Settings, SettingsRepository } from '../application';
import { VegetarianScheduleId } from '../domain';
import { migrateLocalStorageSettings } from './migration';

const STORAGE_KEY = 'settings';

type SettingsDto = {
  vegetarian: {
    scheduleId: number;
  };
  version: number;
};

export class LocalStorageSettingsRepository implements SettingsRepository {
  constructor() {
    migrateLocalStorageSettings();
  }

  get(): Settings {
    const settingsJson = localStorage.getItem(STORAGE_KEY);
    if (settingsJson == null) return this.getDefaultSettings();

    const settingsDto = JSON.parse(settingsJson) as SettingsDto;
    return this.fromDto(settingsDto);
  }

  save(settings: Settings): void {
    const settingsDto = this.toDto(settings);
    const settingsJson = JSON.stringify(settingsDto);
    localStorage.setItem(STORAGE_KEY, settingsJson);
  }

  private getDefaultSettings(): Settings {
    return {
      vegetarian: {
        scheduleId: new VegetarianScheduleId(4),
      },
    };
  }

  private fromDto(settingsDto: SettingsDto): Settings {
    return {
      vegetarian: {
        scheduleId: new VegetarianScheduleId(settingsDto.vegetarian.scheduleId),
      },
    };
  }

  private toDto(settings: Settings): SettingsDto {
    return {
      vegetarian: {
        scheduleId: settings.vegetarian.scheduleId.value,
      },
      version: 1,
    };
  }
}
