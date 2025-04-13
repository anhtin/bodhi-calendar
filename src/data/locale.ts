import { Locale } from 'date-fns';

export async function resolveLocale(): Promise<Locale> {
  const userLocaleNames = navigator.languages;

  for (const localeName of userLocaleNames) {
    switch (localeName) {
      case 'en-US':
        return (await import('date-fns/locale/en-US')).enUS;
      case 'nb-NO':
      case 'nb':
        return (await import('date-fns/locale/nb')).nb;
      case 'vi':
        return (await import('date-fns/locale/vi')).vi;
    }
  }

  return (await import('date-fns/locale/en-US')).enUS;
}
