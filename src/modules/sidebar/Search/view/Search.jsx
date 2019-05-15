import React from 'react';
import styles from './search.module.sass';
import { ReactComponent as Icon } from './images/search.svg';

export default function Search(props) {
  return (
    <form onSubmit={props.submitHandler} name="search" className={styles.search}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search a contact"
        name="searchQuery"
        autoComplete={false}
        onChange={props.changeHandler}
        value={props.value}
      />
      <button type="submit" className={styles.iconWrap}>
        <Icon className={styles.icon} />
      </button>
    </form>
  );
}
