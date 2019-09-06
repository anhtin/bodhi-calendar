import React from 'react';

import styles from './OpenSettingsButton.module.scss';

type Props = {
  onClick: () => void;
};

function OpenSettingsButton({ onClick }: Props) {
  return (
    <div className={styles.configurationButton} onClick={onClick}>⚙</div>
  );
};

export default OpenSettingsButton;
