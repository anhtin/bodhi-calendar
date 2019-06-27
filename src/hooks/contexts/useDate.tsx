import React, { useState, useEffect, useContext, createContext, HTMLProps } from 'react';
import { DateTime } from 'luxon';

const useDate = () => useContext(Date);

const initialDate: DateTime = DateTime.local()
const Date = createContext(initialDate);

export function DateProvider({ children }: HTMLProps<HTMLElement>) {
  const [currentDate, setCurrentDate] = useState(initialDate);

  useEffect(() => {
    const timer = setInterval(() => {
      const newDate = DateTime.local();
      if (!newDate.hasSame(currentDate, 'day')) {
        setCurrentDate(newDate);
      }
    });

    return () => clearInterval(timer);
  });

  return (
    <Date.Provider value={currentDate}>
      {children}
    </Date.Provider>
  );
}

export default useDate;
