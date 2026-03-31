import { LocaleTag } from './locale';

export type Translations = {
  error: string;
  loading: string;
  logoAlt: string;
  nav: {
    ariaLabel: string;
    calendar: string;
    settings: string;
    guide: string;
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
  guide: {
    heading: string;
    description: string;
    howToRead: string;
    examples: {
      regular: string;
      vegetarian: string;
      todayNormal: string;
      todayVegetarian: string;
      otherMonth: string;
    };
    settingsNote: string;
  };
};

const en: Translations = {
  error: 'Error! 😞',
  loading: 'Loading...',
  logoAlt: 'Logo',
  nav: {
    ariaLabel: 'Main navigation',
    calendar: 'Calendar',
    settings: 'Settings',
    guide: 'Guide',
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
  guide: {
    heading: 'Guide',
    description:
      'Bodhi Calendar helps Vietnamese Buddhists who practice intermittent vegetarianism keep track of which days to eat vegetarian. It shows both the Gregorian (solar) date and the Vietnamese lunar date side by side, so you never have to convert between calendars yourself.',
    howToRead: 'How to read a date cell',
    examples: {
      regular: 'A regular day. The small number at the top is the lunar date; the larger number below is the solar date.',
      vegetarian: 'A vegetarian day. Shown in green with a dot above. Observe the lunar date to confirm it is one of your practice days.',
      todayNormal: 'Today — not a vegetarian day. Highlighted with a filled circle so it is easy to spot at a glance.',
      todayVegetarian: 'Today — and a vegetarian day. The green filled circle means both: today, and a day to eat vegetarian.',
      otherMonth: 'A day from the previous or next month, shown faded for context.',
    },
    settingsNote: 'Which days are marked as vegetarian depends on your practice. Practitioners observe anywhere from 2 to 10 vegetarian days per lunar month. You can select your practice in the Settings tab.',
  },
};

const nb: Translations = {
  error: 'Feil! 😞',
  loading: 'Laster...',
  logoAlt: 'Logo',
  nav: {
    ariaLabel: 'Hovednavigasjon',
    calendar: 'Kalender',
    settings: 'Innstillinger',
    guide: 'Guide',
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
  guide: {
    heading: 'Guide',
    description:
      'Bodhi Calendar hjelper vietnamesiske buddhister som praktiserer intermittent vegetarianisme å holde oversikt over hvilke dager de skal spise vegetarisk. Den viser både gregoriansk dato og vietnamesisk månedsdato side om side, slik at du aldri trenger å konvertere mellom kalendere selv.',
    howToRead: 'Slik leser du en datocelle',
    examples: {
      regular: 'En vanlig dag. Det lille tallet øverst er månedsdatoen; det større tallet nedenfor er den gregorianske datoen.',
      vegetarian: 'En vegetardag. Vist i grønt med en prikk over. Se på månedsdatoen for å bekrefte at det er en av dine praksisdager.',
      todayNormal: 'I dag — ikke en vegetardag. Fremhevet med en fylt sirkel slik at den er lett å se med et blikk.',
      todayVegetarian: 'I dag — og en vegetardag. Den grønne sirkelen betyr begge deler: i dag, og en dag for å spise vegetarisk.',
      otherMonth: 'En dag fra forrige eller neste måned, vist nedtonet for kontekst.',
    },
    settingsNote: 'Hvilke dager som markeres som vegetardager avhenger av din praksis. Praktiserende observerer mellom 2 og 10 vegetardager i måneden. Du kan velge din praksis i Innstillinger-fanen.',
  },
};

const vi: Translations = {
  error: 'Lỗi! 😞',
  loading: 'Đang tải...',
  logoAlt: 'Logo',
  nav: {
    ariaLabel: 'Điều hướng chính',
    calendar: 'Lịch',
    settings: 'Cài đặt',
    guide: 'Hướng dẫn',
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
  guide: {
    heading: 'Hướng dẫn',
    description:
      'Bodhi Calendar giúp các Phật tử người Việt thực hành ăn chay kỳ theo dõi những ngày cần ăn chay. Ứng dụng hiển thị cả ngày dương lịch lẫn ngày âm lịch Việt Nam song song, giúp bạn không cần tự đổi lịch.',
    howToRead: 'Cách đọc ô ngày',
    examples: {
      regular: 'Ngày thường. Số nhỏ phía trên là ngày âm lịch; số lớn phía dưới là ngày dương lịch.',
      vegetarian: 'Ngày chay. Hiển thị màu xanh lá với dấu chấm phía trên. Xem ngày âm để xác nhận đây là một trong các ngày chay của bạn.',
      todayNormal: 'Hôm nay — không phải ngày chay. Được đánh dấu bằng vòng tròn đặc để dễ nhận biết.',
      todayVegetarian: 'Hôm nay — và là ngày chay. Vòng tròn xanh lá có nghĩa là: hôm nay, đồng thời là ngày cần ăn chay.',
      otherMonth: 'Ngày thuộc tháng trước hoặc tháng sau, hiển thị mờ để tham khảo.',
    },
    settingsNote: 'Những ngày nào được đánh dấu là ngày chay phụ thuộc vào thực hành của bạn. Người thực hành có thể giữ chay từ 2 đến 10 ngày mỗi tháng âm. Bạn có thể chọn thực hành của mình trong tab Cài đặt.',
  },
};

const TRANSLATIONS: Record<LocaleTag, Translations> = { 'en-US': en, nb, vi };

export function resolveTranslations(tag: LocaleTag): Translations {
  return TRANSLATIONS[tag];
}
