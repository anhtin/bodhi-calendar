import React, { useEffect, ReactNode } from 'react';

import * as serviceWorker from 'utils/serviceWorker';
import { useMessages } from 'hooks';
import { Message } from 'contexts';

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
        There is a new version of Bodhi Calendar available. To update,
        please close all open tabs of Bodhi Calendar before visiting this
        page again.
      </p>
    ),
    status: 'INFO'
  };
}

export default ServiceWorker;
