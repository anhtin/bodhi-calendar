import {
  BodhiCalendarService,
  LocaleProvider,
  Logger,
  SettingsService,
  VersionProvider,
} from './application';
import {
  BrowserLocaleProvider,
  InMemoryVegetarianScheduleRepository,
  LocalStorageSettingsRepository,
  PackageJsonVersionProvider,
  SentryLogger,
} from './infrastructure';

const settingsRepository = new LocalStorageSettingsRepository();

const vegetarianScheduleRepository = new InMemoryVegetarianScheduleRepository();

export const localeProvider: LocaleProvider = new BrowserLocaleProvider();

export const bodhiCalendarService = new BodhiCalendarService(
  settingsRepository,
  vegetarianScheduleRepository
);

export const settingsService = new SettingsService(
  settingsRepository,
  vegetarianScheduleRepository
);

export const logger: Logger = new SentryLogger();

export const versionProvider: VersionProvider =
  new PackageJsonVersionProvider();
