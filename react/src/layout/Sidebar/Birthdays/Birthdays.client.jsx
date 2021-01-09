import React from 'react';
import Birthday from './Birthday.client';
// import styles from "./birthdays.module.sass";
const styles = {};

export default function Component(props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.aside}>
        <div className={styles.header}>Coming birthday</div>
        {(props.entities || []).map((item) => (
          <Birthday item={item} key={item.ID} />
        ))}
      </div>
    </div>
  );
}
