import { getUserLocales } from 'get-user-locale';

import { LocaleProvider } from '../application';

export class BrowserLocaleProvider implements LocaleProvider {
  private readonly cachedLocale: Locale | undefined;

  async get(): Promise<Locale | undefined> {
    if (this.cachedLocale != null) return this.cachedLocale;

    return this.loadMostPreferred();
  }

  private async loadMostPreferred(): Promise<Locale | undefined> {
    const userLocaleNames = getUserLocales();
    for (const localeName of userLocaleNames) {
      const locale =
        (await this.load(localeName)) ??
        (await this.load(localeName.substring(0, 2)));

      if (locale != null) return locale;
    }
  }

  private async load(localeName: string): Promise<Locale | undefined> {
    try {
      return await import(
        /* webpackExclude: /_lib/ */
        `date-fns/locale/${localeName}/index.js`
      );
    } catch (e) {
      return undefined;
    }
  }
}
