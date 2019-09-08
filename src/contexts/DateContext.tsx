import React, { useState, useEffect, createContext, HTMLProps } from 'react';
import { DateTime } from 'luxon';

const initialDate: DateTime = DateTime.local()
const DateContext = createContext(initialDate);

export function DateProvider({ children }: HTMLProps<HTMLElement>) {
  const [currentDate, setCurrentDate] = useState(initialDate);

  useEffect(() => {
    const timer = setInterval(() => {
      const newDate = DateTime.local();
      if (!newDate.hasSame(currentDate, 'day')) {
        setCurrentDate(newDate);
      }
    }, 60000);

    return () => clearInterval(timer);
  });

  return (
    <DateContext.Provider value={currentDate}>
      {children}
    </DateContext.Provider>
  );
}

export const DateConsumer = DateContext.Consumer;

export default DateContext;
