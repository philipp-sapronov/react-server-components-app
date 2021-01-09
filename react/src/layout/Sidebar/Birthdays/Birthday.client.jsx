import React from 'react';
// import styles from './birthday.module.sass';
// import { Link } from 'react-router-dom';

const styles = {};

export default function Component(props) {
  return (
    <a to={`/contacts/${props.item.ID}`}>
      <div className={styles.wrap}>
        <a className={styles.item}>
          <div className={styles.hover} />
          <p className={styles.name}>
            {props.item.fullName}
            <span className={styles.date}>{props.item.birthday}</span>
          </p>
          <p
            className={
              styles.age
            }>{`will be  ${props.item.comingAge} years old`}</p>
        </a>
      </div>
    </a>
  );
}
