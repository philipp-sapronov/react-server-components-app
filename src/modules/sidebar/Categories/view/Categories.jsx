import React from 'react';
import styles from './categories.module.sass';
import Category from './Category';
import constants from '../../../../core/constants/categorySchema';

export default function Categories(props) {
  if (!props.entities) return null;

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>Categories</div>
      {props.entities.map(category => (
        <Category category={category} key={category[constants.ID]} />
      ))}
    </div>
  );
}
