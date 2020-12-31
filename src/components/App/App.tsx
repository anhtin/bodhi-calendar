import React, { ReactNode } from 'react';

import Calendar from 'components/Calendar';
import ErrorBoundary from 'components/ErrorBoundary';
import MessageBar from 'components/MessageBar';
import ServiceWorker from 'components/ServiceWorker';
import { DateProvider } from 'contexts/DateContext';
import { StoreProvider } from 'contexts/StoreContext';
import logo from 'assets/images/logo.svg';

import { MessageProvider } from 'contexts';
import { useStore } from 'hooks';
import GlobalStyle from './GlobalStyle';
import { Wrapper } from './styled';

const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <ErrorBoundary>
        <Provider>
          <ServiceWorker>
            <Main />
            <Footer />
          </ServiceWorker>
        </Provider>
      </ErrorBoundary>
    </Wrapper>
  );
};

function Provider({ children }: { children: ReactNode }) {
  return (
    <MessageProvider>
      <StoreProvider>
        <DateProvider>{children}</DateProvider>
      </StoreProvider>
    </MessageProvider>
  );
}

function Main() {
  return (
    <main>
      <MessageBar />
      <Calendar />
    </main>
  );
}

function Footer() {
  const [{ version }] = useStore();
  return (
    <footer>
      <img className="logo" alt="Logo with a bodhi leaf" src={logo} />
      <div className="credits">
        <p>
          <em>Bodhi Calendar</em> is an{' '}
          <a href="https://github.com/anhtin/bodhi-calendar">
            open-source project
          </a>{' '}
          created by <a href="https://github.com/anhtin">Tin Anh Nguyen</a>.
        </p>
        <p>You are currently running version {version}.</p>
      </div>
    </footer>
  );
}

export default App;
