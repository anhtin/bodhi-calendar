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
          <header className={styles.messageTitle}>{title}:</header> {content}
        </article>
      ))}
    </section>
  );
}

export default MessageBar;
