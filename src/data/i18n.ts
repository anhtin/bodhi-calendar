import { LocaleTag } from './locale';

export type Translations = {
  error: string;
  loading: string;
  logoAlt: string;
  nav: {
    ariaLabel: string;
    calendar: string;
    settings: string;
  };
  calendar: {
    previousMonth: string;
    nextMonth: string;
    tableAriaLabel: string;
    dateFormat: string;
    lunarDay: (n: number) => string;
    vegetarianDay: string;
  };
  settings: {
    heading: string;
    language: string;
    auto: string;
    vegetarianPractice: string;
  };
  practices: readonly [string, string, string, string, string];
};

const en: Translations = {
  error: 'Error! 😞',
  loading: 'Loading...',
  logoAlt: 'Logo',
  nav: {
    ariaLabel: 'Main navigation',
    calendar: 'Calendar',
    settings: 'Settings',
  },
  calendar: {
    previousMonth: 'Previous month',
    nextMonth: 'Next month',
    tableAriaLabel: 'Calendar',
    dateFormat: 'MMMM d',
    lunarDay: (n) => `lunar day ${n}`,
    vegetarianDay: 'vegetarian day',
  },
  settings: {
    heading: 'Settings',
    language: 'Language',
    auto: 'Auto',
    vegetarianPractice: 'Vegetarian practice',
  },
  practices: [
    '2 days a month',
    '4 days a month',
    '6 days a month',
    '8 days a month',
    '10 days a month',
  ],
};

const nb: Translations = {
  error: 'Feil! 😞',
  loading: 'Laster...',
  logoAlt: 'Logo',
  nav: {
    ariaLabel: 'Hovednavigasjon',
    calendar: 'Kalender',
    settings: 'Innstillinger',
  },
  calendar: {
    previousMonth: 'Forrige måned',
    nextMonth: 'Neste måned',
    tableAriaLabel: 'Kalender',
    dateFormat: "d'.' MMMM",
    lunarDay: (n) => `${n}. lunardag`,
    vegetarianDay: 'vegetardag',
  },
  settings: {
    heading: 'Innstillinger',
    language: 'Språk',
    auto: 'Auto',
    vegetarianPractice: 'Vegetarisk praksis',
  },
  practices: [
    '2 dager i måneden',
    '4 dager i måneden',
    '6 dager i måneden',
    '8 dager i måneden',
    '10 dager i måneden',
  ],
};

const vi: Translations = {
  error: 'Lỗi! 😞',
  loading: 'Đang tải...',
  logoAlt: 'Logo',
  nav: {
    ariaLabel: 'Điều hướng chính',
    calendar: 'Lịch',
    settings: 'Cài đặt',
  },
  calendar: {
    previousMonth: 'Tháng trước',
    nextMonth: 'Tháng sau',
    tableAriaLabel: 'Lịch',
    dateFormat: "'ngày' d MMMM",
    lunarDay: (n) => n <= 10 ? `mùng ${n} âm lịch` : `ngày ${n} âm lịch`,
    vegetarianDay: 'ngày chay',
  },
  settings: {
    heading: 'Cài đặt',
    language: 'Ngôn ngữ',
    auto: 'Auto',
    vegetarianPractice: 'Thực hành ăn chay',
  },
  practices: [
    '2 ngày một tháng',
    '4 ngày một tháng',
    '6 ngày một tháng',
    '8 ngày một tháng',
    '10 ngày một tháng',
  ],
};

const TRANSLATIONS: Record<LocaleTag, Translations> = { 'en-US': en, nb, vi };

export function resolveTranslations(tag: LocaleTag): Translations {
  return TRANSLATIONS[tag];
}
