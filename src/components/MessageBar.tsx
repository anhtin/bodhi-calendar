import React from 'react';

import styles from './MessageBar.module.scss';
import { useMessages } from 'hooks';

function MessageBar() {
  const [messages] = useMessages();

  if (messages.length <= 0) {
    return null;
  }

  return (
    <div className={styles.messageBar} role="region" >
      {messages.map(({ title, content }, i) => (
        <section key={i}>
          <span className={styles.messageTitle} role="heading">
            {title}:
          </span>
          <div className={styles.messageContent}>
            {' '}{content}
          </div>
        </section>
      ))}
    </div>
  );
}

export default MessageBar;
