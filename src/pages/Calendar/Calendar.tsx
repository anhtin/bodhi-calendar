import classNames from 'classnames';
import {
  addMonths,
  format,
  getDate,
  getMonth,
  getYear,
  isToday,
  startOfMonth,
} from 'date-fns';
import { useState } from 'react';
import useSWR from 'swr';

import { Button } from '@/components/Button';
import { resolveTranslations, Translations } from '@/data/i18n';
import { AppLocale, resolveLocale } from '@/data/locale';
import { resolveSettings } from '@/data/settings';
import {
  VegetarianPractice,
  resolveVegetarianPractice,
} from '@/data/vegetarian';

import { is30DayLunarMonth } from './helpers/is30DayLunarMonth';
import { resolveLunarDate } from './helpers/lunisolar';
import { resolveMonthName } from './helpers/resolveMonthName';
import { resolveWeekDayNames } from './helpers/resolveWeekDayNames';
import { resolveWeeksInMonthView } from './helpers/resolveWeeksInMonthView';

export function Calendar() {
  const [cursor, setCursor] = useState(startOfMonth(new Date()));
  const { data: settings, error: settingsError } = useSWR(
    'settings',
    resolveSettings,
  );
  const { data: locale, error: localeError } = useSWR(
    settings != null ? ['locale', settings.locale] : null,
    ([, override]) => resolveLocale(override),
  );

  if (settingsError) throw settingsError;
  if (localeError) throw localeError;

  if (settings == null || locale == null) {
    return <p className="text-center">{resolveTranslations('en-US').loading}</p>;
  }

  const t = resolveTranslations(locale.tag);
  const year = getYear(cursor);
  const month = getMonth(cursor);
  const monthName = resolveMonthName(month, locale.dateFnsLocale);
  const weekDayNames = resolveWeekDayNames(locale.dateFnsLocale);
  const weeks = resolveWeeksInMonthView(month, year, locale.dateFnsLocale);

  const vegetarianPractice = resolveVegetarianPractice(
    settings.vegetarian.practiceId,
  );

  return (
    <div className="text-center" style={{ fontSize: 'calc(1rem + 1vw)' }}>
      <Header
        year={year}
        monthName={monthName}
        t={t.calendar}
        onPreviousMonth={() => setCursor(addMonths(cursor, -1))}
        onNextMonth={() => setCursor(addMonths(cursor, 1))}
      />
      <Body
        weekDayNames={weekDayNames}
        weeks={weeks}
        currentMonth={month}
        vegetarianPractice={vegetarianPractice}
        locale={locale}
        t={t.calendar}
      />
    </div>
  );
}

type HeaderProps = {
  year: number;
  monthName: string;
  t: Translations['calendar'];
  onPreviousMonth: () => void;
  onNextMonth: () => void;
};

function Header({
  year,
  monthName,
  t,
  onPreviousMonth,
  onNextMonth,
}: HeaderProps) {
  return (
    <header className="flex justify-between items-center">
      <Button aria-label={t.previousMonth} className="text-[0.75em]" onClick={onPreviousMonth}>
        {'<'}
      </Button>
      <div className="flex flex-col">
        <h1>{year}</h1>
        <h2 className="font-bold text-[1.5em]">{monthName}</h2>
      </div>
      <Button aria-label={t.nextMonth} className="text-[0.75em]" onClick={onNextMonth}>
        {'>'}
      </Button>
    </header>
  );
}

type BodyProps = {
  weekDayNames: string[];
  weeks: Date[][];
  currentMonth: number;
  vegetarianPractice: VegetarianPractice;
  locale: AppLocale;
  t: Translations['calendar'];
};

function Body({
  weekDayNames,
  weeks,
  currentMonth,
  vegetarianPractice,
  locale,
  t,
}: BodyProps) {
  return (
    <table aria-label={t.tableAriaLabel} className="w-full table-fixed">
      <thead className="border-b">
        <tr>
          {weekDayNames.map((x, i) => (
            <th key={i} scope="col" className="font-normal">
              {x}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeks.map((week, i) => (
          <tr key={i}>
            {week.map((day, i) => (
              <td key={i}>
                <DayCell
                  day={day}
                  currentMonth={currentMonth}
                  vegetarianPractice={vegetarianPractice}
                  locale={locale}
                  t={t}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

type DayCellProps = {
  day: Date;
  currentMonth: number;
  vegetarianPractice: VegetarianPractice;
  locale: AppLocale;
  t: Translations['calendar'];
};

function DayCell({ day, currentMonth, vegetarianPractice, locale, t }: DayCellProps) {
  const lunarDate = resolveLunarDate(day);
  const vegetarianDays = is30DayLunarMonth(lunarDate)
    ? vegetarianPractice.for30DayMonths
    : vegetarianPractice.for29DayMonths;

  const isCurrentMonth = getMonth(day) === currentMonth;
  const isVegetarianDay = vegetarianDays.includes(lunarDate.lunarDay);
  const label = [
    format(day, t.dateFormat, { locale: locale.dateFnsLocale }),
    t.lunarDay(lunarDate.lunarDay),
    isVegetarianDay ? t.vegetarianDay : null,
  ]
    .filter(Boolean)
    .join(', ');
  return (
    <div className="flex justify-center">
      <div
        aria-label={label}
        className={classNames(
          'relative flex flex-col justify-center items-center w-[2.2em] h-[2.2em]',
          isToday(day) && !isVegetarianDay && 'bg-(--foreground) rounded-full font-bold text-(--background)',
          isToday(day) && isVegetarianDay && 'bg-(--vegetarian) rounded-full font-bold text-(--background)',
          !isCurrentMonth && 'opacity-[0.5]',
          isVegetarianDay && !isToday(day) && 'text-(--vegetarian) font-bold',
        )}
      >
        {isVegetarianDay && <span aria-hidden="true" className="absolute top-[0.3em] text-[0.3em] leading-none">•</span>}
        <span className="text-[0.5em] leading-none">{lunarDate.lunarDay}</span>
        <span className="leading-none">{getDate(day)}</span>
      </div>
    </div>
  );
}
