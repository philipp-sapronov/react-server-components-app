import React from 'react';
import ContextMenuItem from './ContextMenuItem';
import styles from './contextMenu.module.sass';

export default function ContextMenu(props) {
  console.log(props, 'CONTEXTMENU props');
  if (!props.items || !Array.isArray(props.items) || props.items.length <= 0) return null;

  return (
    <div className={styles.container} ref={props.containerRef}>
      <div className={styles.inner}>
        {props.items.map((item, idx) => (
          <ContextMenuItem {...props} key={idx} item={item} targetId={props.targetId} />
        ))}
      </div>
    </div>
  );
}
