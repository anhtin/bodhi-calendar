import React, { ReactNode, useState } from 'react';

import { createMutableContext } from 'utils/helpers';

export interface Message {
  title: string;
  content: ReactNode;
  status: MessageStatus;
}

type MessageStatus = 'INFO' | 'ALERT';

interface Props {
  children: ReactNode;
}

const MessageContext = createMutableContext<Message[]>();

export const MessageProvider = function ({ children }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <MessageContext.Provider value={[messages, setMessages]}>
      {children}
    </MessageContext.Provider>
  );
}

export const MessageConsumer = MessageContext.Consumer;

export default MessageContext;
