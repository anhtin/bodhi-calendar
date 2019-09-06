import React from 'react';

import Calendar from 'components/Calendar';
import { SettingsProvider } from 'components/context/SettingsContext';
import { DateProvider } from 'components/context/DateContext';
import styles from './App.module.css';

import 'assets/sass/main.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <SettingsProvider>
        <DateProvider>
          <Calendar />
        </DateProvider>
      </SettingsProvider>
    </div>
  );
}

export default App;
