import * as Sentry from '@sentry/react';
import classNames from 'classnames';
import { ComponentProps, useState } from 'react';

import logo from '@/assets/logo.svg';
import { Calendar } from '@/pages/Calendar';
import { Settings } from '@/pages/Settings';

const version = import.meta.env.VITE_APP_VERSION ?? 'Unspecified';

export function App() {
  const [page, setPage] = useState<'calendar' | 'settings'>('calendar');

  return (
    <>
      <main className="p-[2vh]">
        <Sentry.ErrorBoundary
          fallback={<p className="text-center">Error! 😞</p>}
        >
          {page === 'calendar' && <Calendar />}
          {page === 'settings' && <Settings />}
        </Sentry.ErrorBoundary>
      </main>
      <aside className="fixed left-0 bottom-0 w-dvw">
        <nav className="flex">
          <Tab active={page === 'calendar'} onClick={() => setPage('calendar')}>
            Calendar
          </Tab>
          <Tab active={page === 'settings'} onClick={() => setPage('settings')}>
            Settings
          </Tab>
        </nav>
      </aside>
      <footer className="flex flex-col items-center mb-[100px]">
        <img alt="Logo" src={logo} className="h-[70px] m-3" />
        <p className="text-xs">
          <a href="https://github.com/anhtin/bodhi-calendar">Bodhi Calendar</a>{' '}
          version {version}
        </p>
      </footer>
    </>
  );
}

type TabProps = {
  active: boolean;
  children: ComponentProps<'button'>['children'];
  onClick: () => void;
};

function Tab({ active, children, onClick }: TabProps) {
  return (
    <button
      className={classNames(
        'flex-1 border border-[#dbdbdb] hover:bg-[#f6f6ff]',
        active ? 'bg-[#f6f6ff]' : 'bg-white',
      )}
      style={{ height: 'min(80px, max(15vw, 15vh))' }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
