import React from 'react';

import { useMessages } from 'hooks';
import { Wrapper, MessageWrapper, Title } from './styled';

function MessageBar() {
  const [messages] = useMessages();

  if (messages.length <= 0) {
    return null;
  }

  return (
    <Wrapper>
      {messages.map(({ title, content }, i) => (
        <MessageWrapper key={i}>
          <Title>{title}:</Title> {content}
        </MessageWrapper>
      ))}
    </Wrapper>
  );
}

export default MessageBar;
