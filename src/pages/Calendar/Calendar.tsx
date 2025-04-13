import classNames from 'classnames';
import {
  addMonths,
  getDate,
  getMonth,
  getYear,
  isToday,
  startOfMonth,
} from 'date-fns';
import { useState } from 'react';
import useSWR from 'swr';

import { Button } from '@/components/Button';
import { resolveLocale } from '@/data/locale';
import { resolveSettings } from '@/data/settings';
import {
  VegetarianSchedule,
  resolveVegetarianSchedule,
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
  const { data: locale, error: localeError } = useSWR('locale', resolveLocale);

  if (settingsError) throw settingsError;
  if (localeError) throw localeError;

  if (settings == null || locale == null) {
    return <p className="text-center">Loading...</p>;
  }

  const year = getYear(cursor);
  const month = getMonth(cursor);
  const monthName = resolveMonthName(month, locale);
  const weekDayNames = resolveWeekDayNames(locale);
  const weeks = resolveWeeksInMonthView(month, year, locale);

  const vegetarianSchedule = resolveVegetarianSchedule(
    settings.vegetarian.scheduleId,
  );

  return (
    <div className="text-center" style={{ fontSize: 'calc(1rem + 1vw)' }}>
      <Header
        year={year}
        monthName={monthName}
        onPreviousMonth={() => setCursor(addMonths(cursor, -1))}
        onNextMonth={() => setCursor(addMonths(cursor, 1))}
      />
      <Body
        weekDayNames={weekDayNames}
        weeks={weeks}
        currentMonth={month}
        vegetarianSchedule={vegetarianSchedule}
      />
    </div>
  );
}

type HeaderProps = {
  year: number;
  monthName: string;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
};

function Header({
  year,
  monthName,
  onPreviousMonth,
  onNextMonth,
}: HeaderProps) {
  return (
    <header className="flex justify-between items-center">
      <Button className="text-[0.75em]" onClick={onPreviousMonth}>
        {'<'}
      </Button>
      <div className="flex flex-col">
        <h1>{year}</h1>
        <h2 className="font-bold text-[1.5em]">{monthName}</h2>
      </div>
      <Button className="text-[0.75em]" onClick={onNextMonth}>
        {'>'}
      </Button>
    </header>
  );
}

type BodyProps = {
  weekDayNames: string[];
  weeks: Date[][];
  currentMonth: number;
  vegetarianSchedule: VegetarianSchedule;
};

function Body({
  weekDayNames,
  weeks,
  currentMonth,
  vegetarianSchedule,
}: BodyProps) {
  return (
    <table className="w-full table-fixed">
      <thead className="border-b">
        <tr>
          {weekDayNames.map((x, i) => (
            <th key={i} className="font-normal">
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
                  vegetarianSchedule={vegetarianSchedule}
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
  vegetarianSchedule: VegetarianSchedule;
};

function DayCell({ day, currentMonth, vegetarianSchedule }: DayCellProps) {
  const lunarDate = resolveLunarDate(day);
  const vegetarianDays = is30DayLunarMonth(lunarDate)
    ? vegetarianSchedule.for30DayMonths
    : vegetarianSchedule.for29DayMonths;

  const isCurrentMonth = getMonth(day) === currentMonth;
  const isVegetarianDay = vegetarianDays.includes(lunarDate.lunarDay);
  return (
    <div className="flex justify-center">
      <div
        className={classNames(
          'flex flex-col w-[2em] h-[2em]',
          isToday(day) && 'bg-(--foreground) rounded-full font-bold',
          isToday(day) && !isVegetarianDay && 'text-(--background)',
          !isCurrentMonth && 'opacity-[0.5]',
          isVegetarianDay && 'text-[#a1b182] font-bold',
        )}
      >
        <span className="text-[0.5em] translate-y-[0.2em]">
          {lunarDate.lunarDay}
        </span>
        <span className="translate-y-[-0.3em]">{getDate(day)}</span>
      </div>
    </div>
  );
}
