import * as Sentry from '@sentry/browser';

import { isProduction } from './environment';

export function initializeLogging() {
  if (isProduction()) {
    Sentry.init({
      dsn: 'https://db09e878f14748c5ac6e6c24b94b78ca@sentry.io/1723548'
    });
  }
}

export function logError(error: Error) {
  Sentry.captureException(error)
}

export function logWarning(message: string) {
  Sentry.captureMessage(message, Sentry.Severity.Warning);
}

export function logInfo(message: string) {
  Sentry.captureMessage(message, Sentry.Severity.Info);
}

export function logDebug(message: string) {
  Sentry.captureMessage(message, Sentry.Severity.Debug);
}

export function logTrace(message: string) {
  Sentry.captureMessage(message, Sentry.Severity.Log);
}
