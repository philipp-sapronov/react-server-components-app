import React from 'react';
import styles from './contextMenu.module.sass';

export default function ContextMenuItem({ item, targetId, onItemClickHandler }) {
  // console.log(onItemClickHandler, 'action');
  return (
    <div className={styles.item} onClick={onItemClickHandler(item.action, targetId)}>
      <div className={styles.title}>{item.text}</div>
    </div>
  );
}
