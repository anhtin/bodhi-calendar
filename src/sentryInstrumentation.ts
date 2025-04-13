import * as Sentry from '@sentry/react';

if (!import.meta.env.DEV) {
  Sentry.init({
    dsn: 'https://db09e878f14748c5ac6e6c24b94b78ca@sentry.io/1723548',
    release: process.env.VITE_SENTRY_RELEASE,
    integrations: [],
  });
}
