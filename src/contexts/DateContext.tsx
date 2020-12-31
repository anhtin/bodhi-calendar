import React, { useState, useEffect, createContext, HTMLProps } from 'react';
import { isSameDay } from 'date-fns';

const DateContext = createContext(new Date());

export function DateProvider({ children }: HTMLProps<HTMLElement>) {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const newDate = new Date();
      if (!isSameDay(currentDate, newDate)) {
        setCurrentDate(newDate);
      }
    }, 60000);

    return () => clearInterval(timer);
  });

  return (
    <DateContext.Provider value={currentDate}>{children}</DateContext.Provider>
  );
}

export const DateConsumer = DateContext.Consumer;

export default DateContext;
