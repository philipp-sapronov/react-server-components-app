import React from 'react';
// import styles from './toggleSidebar.module.sass';
const styles = {};

function ToggleSidebar({ icon }) {
  return (
    <div className={styles.wrap}>
      <button className={styles.btn} onClick={props.toggleSidebar}>
        {!!icon && <img src={styles.icon} />}
      </button>
    </div>
  );
}

export default ToggleSidebar;
