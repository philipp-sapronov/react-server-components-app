import React from 'react';
import styles from './search.module.sass';

export default function Search(props) {
  return (
    <div className={styles.search}>
      <input className={styles.input} type="text" placeholder="Search a contact" />
      <div className={styles.svgWrap}>
        <img className={styles.svgSearch} src="../img/svg/search-white.svg" />
      </div>
    </div>
  );
}
