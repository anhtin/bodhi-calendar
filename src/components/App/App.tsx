import React from 'react';

import Calendar from 'components/Calendar';
import { DateProvider } from 'contexts/DateContext';
import { StoreProvider } from 'contexts/StoreContext';
import logo from 'assets/images/logo.svg';
import './App.css';

import 'assets/sass/main.scss';
import ErrorBoundary from 'components/ErrorBoundary';

const App = () => {
  return (
    <div className="app">
      <ErrorBoundary>
        <Main />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

function Main() {
  return (
    <main>
      <StoreProvider>
        <DateProvider>
          <Calendar />
        </DateProvider>
      </StoreProvider>
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
