import packageJson from '../../package.json';
import { Version, VersionProvider } from '../application';

export class PackageJsonVersionProvider implements VersionProvider {
  get(): Version {
    const versionString = packageJson.version;
    return new Version(versionString);
  }
}
