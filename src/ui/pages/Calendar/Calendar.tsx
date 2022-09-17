import {
  addMonths,
  endOfMonth,
  endOfWeek,
  getMonth,
  getYear,
  isToday,
  startOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns';
import { useState } from 'react';

import { bodhiCalendarService, localeProvider } from '../../../services';
import { usePromise } from '../../hooks';
import { CalendarBody as Body, CalendarDate } from './Body';
import { Header } from './Header';
import { Container } from './styled';

export function Calendar() {
  const viewModel = useViewModel();
  if (viewModel == null)
    return <p style={{ textAlign: 'center' }}>Loading...</p>;

  const {
    data: { year, monthName, dayNames, weeks },
    actions: { prevMonth, nextMonth },
  } = viewModel;

  return (
    <Container>
      <Header
        year={year}
        monthName={monthName}
        onPrevMonth={prevMonth}
        onNextMonth={nextMonth}
      />
      <Body dayNames={dayNames} weeks={weeks} />
    </Container>
  );
}

function useViewModel() {
  const [pivot, setPivot] = useState(() => startOfMonth(new Date()));
  const year = getYear(pivot);
  const month = getMonth(pivot) + 1;

  const [locale, localeError] = usePromise(
    () => localeProvider.get(),
    [localeProvider]
  );

  if (localeError != null) throw localeError;
  if (locale == null) return null;

  const monthName = getMonthName(month, locale);
  const dayNames = getWeekDayNames(locale);
  const weeks = createWeeks(pivot, locale);

  return {
    data: {
      year,
      monthName,
      dayNames,
      weeks,
    },
    actions: {
      prevMonth: () => setPivot(subMonths(pivot, 1)),
      nextMonth: () => setPivot(addMonths(pivot, 1)),
    },
  };
}

function getMonthName(month: number, locale: Locale) {
  return locale.localize?.month(month - 1);
}

function getWeekDayNames(locale: Locale): Array<string> {
  const indices = createWeekDayIndices(locale);
  return mapWeekDayIndicesToNames(indices, locale);
}

function createWeekDayIndices(locale: Locale | undefined): Array<number> {
  return shiftLeft([0, 1, 2, 3, 4, 5, 6], locale?.options?.weekStartsOn ?? 0);
}

function shiftLeft<T>(array: Array<T>, numPlaces: number): Array<T> {
  return array.slice(numPlaces).concat(array.slice(0, numPlaces));
}

function mapWeekDayIndicesToNames(
  weekDayIndices: Array<number>,
  locale: Locale | undefined
): Array<string> {
  return weekDayIndices.map((day) =>
    locale?.localize?.day(day, { width: 'abbreviated' })
  );
}

function createWeeks(pivot: Date, locale: Locale): Array<Array<CalendarDate>> {
  const startDate = startOfWeek(pivot, { locale });
  const endDate = endOfWeek(endOfMonth(pivot), { locale });

  const dates = bodhiCalendarService.getDatesBetween(startDate, endDate).map(
    (date) =>
      ({
        ...date,
        isToday: isToday(date.lunarDate.toDate()),
        isThisMonth: date.solarDate.month - 1 === getMonth(pivot),
      } as CalendarDate)
  );

  return splitArray(dates, 7);
}

function splitArray<T>(array: Array<T>, partSize: number): Array<Array<T>> {
  const parts = [];
  for (let i = 0; i < array.length / partSize; i++) {
    const week = array.slice(i * partSize, (i + 1) * partSize);
    parts.push(week);
  }
  return parts;
}
