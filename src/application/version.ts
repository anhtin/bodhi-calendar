import { Version, VersionProvider } from './ports';

export class VersionService {
  constructor(private readonly versionProvider: VersionProvider) {}

  getCurrent(): Version {
    return this.versionProvider.get();
  }
}
