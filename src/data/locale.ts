import { Locale } from 'date-fns';
import { enUS } from 'date-fns/locale/en-US';

export async function resolveLocale(): Promise<Locale> {
  const userLocaleNames = navigator.languages;

  for (const localeName of userLocaleNames) {
    try {
      switch (localeName) {
        case 'en-US':
          return enUS;
        case 'nb-NO':
        case 'nb':
          return (await import('date-fns/locale/nb')).nb;
        case 'vi':
          return (await import('date-fns/locale/vi')).vi;
      }
    } catch {
      return enUS;
    }
  }

  return enUS;
}
