import React from 'react';

import styles from './MessageBar.module.scss';
import { useMessages } from 'hooks';

function MessageBar() {
  const [messages] = useMessages();

  if (messages.length <= 0) {
    return null;
  }

  return (
    <section className={styles.messageBar}>
      {messages.map(({ title, content }, i) => (
        <article key={i} className={styles.messageContainer}>
          <span className={styles.messageTitle} role="heading">
            {title}:
          </span>
          {' '}{content}
        </article>
      ))}
    </section>
  );
}

export default MessageBar;
