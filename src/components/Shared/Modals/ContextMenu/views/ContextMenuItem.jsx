import React from 'react';
import styles from './contextMenu.module.sass';

function ContextMenuItem(props) {
  console.log(props, 'CONTEXT_MENU_ITEM');
  const { item, triggerId, onItemClickHandler } = props;
  return (
    <div className={styles.item} onClick={onItemClickHandler(item.action, triggerId)}>
      <div className={styles.title}>{item.text}</div>
    </div>
  );
}

export default function(items) {
  return function(props) {
    console.log(props, 'CONTEXT_MENU_ITEMS');
    return items.map((item, idx) => <ContextMenuItem item={item} key={idx} {...props} />);
  };
}
