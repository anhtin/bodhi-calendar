import * as Sentry from '@sentry/browser';

import { Logger } from '../application';

export class SentryLogger implements Logger {
  constructor() {
    if (process.env.NODE_ENV === 'production') {
      Sentry.init({
        dsn: 'https://db09e878f14748c5ac6e6c24b94b78ca@sentry.io/1723548',
      });
    }
  }

  logError(error: Error): void {
    Sentry.captureException(error);
  }
}
