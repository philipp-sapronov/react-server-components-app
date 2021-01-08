import React from "react";
import ContextMenuItem from "./ContextMenuItem";
import styles from "./contextMenu.module.sass";

export default function ContextMenu(props) {
  const Component = props.component;

  if (!Component) return null;

  return (
    <div className={styles.container} ref={props.containerRef}>
      <div className={styles.inner}>
        <Component {...props} />
      </div>
    </div>
  );
}
