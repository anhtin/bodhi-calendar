import { getAppVersion } from 'utils/environment-variables';
import { parseSemver } from 'utils/semver';

export function getVersion(): string {
  const version = localStorage.getItem('version') || getAppVersion();

  try {
    parseSemver(version);
  } catch (e) {
    throw new InvalidAppVersion(`Invalid app version detected: ${version}.`);
  }

  return version;
}

export function setVersion(version: string) {
  localStorage.setItem('version', version);
}

export class InvalidAppVersion extends Error { }
