import React, { useEffect, ReactNode } from 'react';

import { useMessages } from 'hooks';
import { Message } from 'contexts';
import { getAppName } from 'utils/environment-variables';
import * as serviceWorker from 'utils/serviceWorker';

interface Props {
  children: ReactNode;
}

function ServiceWorker({ children }: Props) {
  const [messages, setMessages] = useMessages();

  useEffect(() => {
    serviceWorker.register({
      onUpdate: () => setMessages([...messages, createUpdateMessage()])
    });
  });

  return <>{children}</>;
}

function createUpdateMessage(): Message {
  return {
    title: 'Update',
    content: (
      <p>
        There is a new version of {getAppName()} available. To update, please
        close all open tabs of {getAppName()} before visiting this page
        again.
      </p>
    ),
    status: 'INFO'
  };
}

export default ServiceWorker;
