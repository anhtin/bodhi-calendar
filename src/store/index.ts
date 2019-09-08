import { getNpmVersion } from 'utils/environment-variables';
import { isOutdated } from 'utils/semver';
import { getVegetarianSchedule } from './settings/vegetarian';
import { getVersion, setVersion } from './version';
import { saveSettings, Settings } from './settings';

export interface Store {
  settings: Settings;
  version: string;
}

export function saveStore({ settings, version }: Store) {
  saveSettings(settings);
  setVersion(version);
}

export function initializeStore(): Store {
  migrateStoreIfNeccessary();
  return {
    settings: {
      schedule: getVegetarianSchedule()
    },
    version: getVersion(),
  };
}

function migrateStoreIfNeccessary(): void {
  if (localStorage) {
    const storeVersion = getVersion();
    const appVersion = getNpmVersion();
    if (isOutdated(storeVersion, appVersion)) {
      migrateFrom(storeVersion);
    }
  }
}

function migrateFrom(version: string) {
  // TODO: Migration code (when relevant)
  setVersion(version);
}

export * from './settings';
export * from './version';
