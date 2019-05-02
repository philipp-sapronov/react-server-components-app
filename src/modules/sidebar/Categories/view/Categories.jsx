import React from 'react';
import styles from './categories.module.sass';
import Category from './Category';

export default function Categories(props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>Categories</div>
      <Category />
    </div>
  );
}
