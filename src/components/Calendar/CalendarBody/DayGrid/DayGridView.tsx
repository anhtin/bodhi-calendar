import React from 'react';
import { DateTime } from 'luxon';

import DayTile from './DayTile';
import Flex from 'components/Flex';
import { VegetarianDayPredicate } from 'utils/types';

import './style.scss';

interface DayGridViewProps {
  currentDate: DateTime;
  displayDate: DateTime;
  pred: VegetarianDayPredicate;
}

export const DayGridView = ({
    currentDate,
    displayDate,
    pred,
}: DayGridViewProps) => {
  const grid = computeDateGrid(displayDate);
  return (
    <div className="day-grid">
      {grid.map((row, i) => (
        <Flex key={i} justifyContent="space-around">
          {row.map((col, j) => (
            <Flex key={i} flex={1} justifyContent="space-around">
              <DayTile
                date={col}
                pred={pred}
                today={currentDate}
                discrete={!col.hasSame(displayDate, 'month')}
              />
            </Flex>
          ))}
        </Flex>
      ))}
    </div>
  );
}

function computeDateGrid(date: DateTime): DateTime[][] {
  date = date.startOf('week');
  const weeks = [];
  for (let week = 0; week < 5; week++) {
    const days = [];
    for (let day = 0; day < 7; day++) {
      days.push(date);
      date = date.plus({ days: 1 });
    }
    weeks.push(days);
  }
  return weeks;
}