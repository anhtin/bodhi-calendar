import { Locale } from 'date-fns';
import { enUS } from 'date-fns/locale/en-US';

export type LocaleTag = 'en-US' | 'nb' | 'vi';

export type AppLocale = {
  dateFnsLocale: Locale;
  tag: LocaleTag;
};

export const LOCALE_NAMES: Record<LocaleTag, string> = {
  'en-US': 'English',
  'nb': 'Norsk bokmål',
  'vi': 'Tiếng Việt',
};

export async function resolveLocale(override: LocaleTag | null = null): Promise<AppLocale> {
  const localeNames = override != null ? [override, ...navigator.languages] : [...navigator.languages];

  for (const localeName of localeNames) {
    try {
      switch (localeName) {
        case 'en-US':
          return { dateFnsLocale: enUS, tag: 'en-US' };
        case 'nb-NO':
        case 'nb':
          return { dateFnsLocale: (await import('date-fns/locale/nb')).nb, tag: 'nb' };
        case 'vi':
          return { dateFnsLocale: (await import('date-fns/locale/vi')).vi, tag: 'vi' };
      }
    } catch {
      continue;
    }
  }

  return { dateFnsLocale: enUS, tag: 'en-US' };
}
