export function getAppName(): string {
  return getEnvironmentVariable('REACT_APP_NAME', 'Bodhi Calendar');
}

export function getAppVersion(): string {
  const UNKNOWN = 'UNKOWN';
  const version = getEnvironmentVariable('REACT_APP_VERSION', UNKNOWN);
  if (version === UNKNOWN) {
    throw new UnknownAppVersionError('Failed to resolve app version.');
  }
  return version;
}

export class UnknownAppVersionError extends Error {}

function getEnvironmentVariable(name: string, defaultValue: string): string {
  return process.env[name] || defaultValue;
}
