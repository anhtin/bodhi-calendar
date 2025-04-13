import * as Sentry from '@sentry/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App.tsx';
import './index.css';
import './sentryInstrumentation';

const container = document.getElementById('root')!;
const root = createRoot(container, {
  onUncaughtError: Sentry.reactErrorHandler((error, errorInfo) => {
    console.error('Uncaught error', error, errorInfo.componentStack);
  }),
  onCaughtError: Sentry.reactErrorHandler((error, errorInfo) => {
    console.warn('Caugh error', error, errorInfo.componentStack);
  }),
  onRecoverableError: Sentry.reactErrorHandler(),
});
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
