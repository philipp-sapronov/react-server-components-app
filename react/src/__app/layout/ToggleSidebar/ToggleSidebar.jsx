import React from "react";
import styles from "./toggleSidebar.module.sass";

function ToggleSidebar(props) {
  const Icon = props.icon;
  return (
    <div className={styles.wrap}>
      <button className={styles.btn} onClick={props.toggleSidebar}>
        {!!Icon && <Icon className={styles.icon} />}
      </button>
    </div>
  );
}

export default ToggleSidebar;
