import { getNpmVersion } from 'utils/environment-variables';

export function getVersion(): string {
  const storeVersion = localStorage.getItem('version');
  if (storeVersion) {
    return storeVersion;
  }

  const appVersion = getNpmVersion();
  setVersion(appVersion);
  return appVersion;
}

export function setVersion(version: string) {
  localStorage.setItem('version', version);
}
