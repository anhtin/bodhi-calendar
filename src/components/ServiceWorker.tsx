import React, { useState, useEffect, ReactNode } from 'react';

import * as serviceWorker from 'utils/serviceWorker';
import styles from './ServiceWorker.module.scss';

interface Props {
  children: ReactNode;
}

function ServiceWorker({ children }: Props) {
  const [hasNewVersion, setHasNewVersion] = useState(false);

  useEffect(() => {
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.register({ onUpdate: () => setHasNewVersion(true) });
  });

  return (
    <>
      {hasNewVersion && (
        <div className={styles.notificationBar} role="alert">
          <p>
            <span className={styles.notificationTitle}>UPDATE:</span>
            {' '}
            There is a new version of Bodhi Calendar available. To update,
            please close all open tabs of Bodhi Calendar before visiting this
            page again.
          </p>
        </div>
      )}
      {children}
    </>
  );
}

export default ServiceWorker;
