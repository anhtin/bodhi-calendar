// eslint-disable-next-line
import logo from '!file-loader!../../assets/images/logo.svg';

import { versionProvider } from '../../services';
import { Calendar } from '../pages/Calendar';
import { Settings } from '../pages/Settings';
import { ErrorBoundary } from './ErrorBoundary';
import GlobalStyle from './GlobalStyle';
import { Tabs } from './Tabs';
import { Container } from './styled';

export function App() {
  return (
    <ErrorBoundary>
      <GlobalStyle />
      <Container>
        <main>
          <Tabs
            tabs={[
              { name: 'Calendar', component: Calendar },
              { name: 'Settings', component: Settings },
            ]}
          />
        </main>
        <Footer />
      </Container>
    </ErrorBoundary>
  );
}

function Footer() {
  const version = versionProvider.get();
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
        <p>You are currently running version {version.toString()}.</p>
      </div>
    </footer>
  );
}
