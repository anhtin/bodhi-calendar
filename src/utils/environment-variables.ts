
export function getNpmVersion(): string {
  return getEnvironmentVariable('npm_package_version', '0.0.0');
}

function getEnvironmentVariable(name: string, defaultValue: string): string {
  return process.env[name] || defaultValue;
}
