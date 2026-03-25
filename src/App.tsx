import * as Sentry from '@sentry/react';
import classNames from 'classnames';
import { ComponentProps, useState } from 'react';
import useSWR from 'swr';

import logo from '@/assets/logo.svg';
import { resolveTranslations } from '@/data/i18n';
import { resolveLocale } from '@/data/locale';
import { resolveSettings } from '@/data/settings';
import { Calendar } from '@/pages/Calendar';
import { Settings } from '@/pages/Settings';

const version = import.meta.env.VITE_APP_VERSION ?? 'Unspecified';

const CHUNK_RELOAD_KEY = 'chunk-reload-attempted';

export function App() {
  const [page, setPage] = useState<'calendar' | 'settings'>('calendar');
  const { data: settings } = useSWR('settings', resolveSettings);
  const { data: locale } = useSWR(
    settings != null ? ['locale', settings.locale] : null,
    ([, override]) => resolveLocale(override),
  );
  const t = resolveTranslations(locale?.tag ?? 'en-US');

  return (
    <>
      <main className="p-[2vh]">
        <Sentry.ErrorBoundary
          fallback={<p className="text-center">{t.error}</p>}
          onError={(error) => {
            if (error instanceof TypeError && /importing a module script failed|load failed/i.test(error.message)) {
              if (!sessionStorage.getItem(CHUNK_RELOAD_KEY)) {
                sessionStorage.setItem(CHUNK_RELOAD_KEY, '1');
                window.location.reload();
              }
            }
          }}
        >
          {page === 'calendar' && <Calendar />}
          {page === 'settings' && <Settings />}
        </Sentry.ErrorBoundary>
      </main>
      <aside className="fixed left-0 bottom-0 w-dvw">
        <nav aria-label={t.nav.ariaLabel} className="flex">
          <Tab active={page === 'calendar'} onClick={() => setPage('calendar')}>
            {t.nav.calendar}
          </Tab>
          <Tab active={page === 'settings'} onClick={() => setPage('settings')}>
            {t.nav.settings}
          </Tab>
        </nav>
      </aside>
      <footer className="flex flex-col items-center mb-[100px]">
        <img alt={t.logoAlt} src={logo} className="h-[70px] m-3" />
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
      aria-current={active ? 'page' : undefined}
      className={classNames(
        'flex-1 border border-(--border) hover:bg-(--surface)',
        active ? 'bg-(--surface)' : 'bg-white',
      )}
      style={{ height: 'min(80px, max(15vw, 15vh))' }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
