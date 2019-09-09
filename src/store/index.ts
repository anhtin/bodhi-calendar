import { getAppVersion } from 'utils/environment-variables';
import { isOutdated } from 'utils/semver';
import { getVegetarianSchedule } from './settings/vegetarian';
import { getVersion, setVersion } from './version';
import { saveSettings, Settings, loadSettings } from './settings';

export interface Store {
  settings: Settings;
  version: string;
}

export function resetStore() {
  const store = createInitialStore()
  saveStore(store);
}

function createInitialStore(): Store {
  return {
    settings: {
      schedule: getVegetarianSchedule()
    },
    version: getAppVersion(),
  };
}

export function saveStore({ settings, version }: Store) {
  saveSettings(settings);
  setVersion(version);
}

export function initializeStore(): Store {
  migrateStoreIfNeccessary();
  return loadStore();
}

export function loadStore(): Store {
  return {
    settings: loadSettings(),
    version: getVersion(),
  }
}

function migrateStoreIfNeccessary(): void {
  if (localStorage) {
    const storeVersion = getVersion();
    const appVersion = getAppVersion();
    if (isOutdated(storeVersion, appVersion)) {
      migrateFrom(storeVersion);
    }
  }
}

function migrateFrom(version: string) {
  // TODO: Migration code (when relevant)

  const updatedVersion = getAppVersion();
  setVersion(updatedVersion);
}

export * from './settings';
export * from './version';
