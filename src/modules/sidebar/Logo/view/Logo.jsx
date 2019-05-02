import React from 'react';
import styles from './logo.module.sass';

export default function Logo(props) {
  return (
    <div className={styles.logoWrap}>
      <div className={styles.logoText}>
        <div className="text-logo__text">Contact Book</div>
      </div>
    </div>
  );
}
