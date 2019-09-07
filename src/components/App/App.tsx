import React from 'react';

import Calendar from 'components/Calendar';
import { SettingsProvider } from 'components/context/SettingsContext';
import { DateProvider } from 'components/context/DateContext';
import logo from 'assets/images/logo.svg';
import './App.css';

import 'assets/sass/main.scss';

const App = () => {
  return (
    <div className="app">
      <Main />
      <Footer />
    </div>
  );
}

function Main() {
  return (
    <main>
      <SettingsProvider>
        <DateProvider>
          <Calendar />
        </DateProvider>
      </SettingsProvider>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <img
        className="logo"
        alt="Logo with a bodhi leaf"
        src={logo}
      />
      <div className="credits">
        <p>
          <em>Bodhi Calendar</em> is an
          {' '}
          <a href="https://github.com/anhtin/bodhi-calendar-v2">
            open-source project
          </a>
          {' '}created by
          {' '}
          <a href="https://github.com/anhtin">Tin Anh Nguyen</a>.
        </p>
      </div>
    </footer>
  );
};

export default App;
