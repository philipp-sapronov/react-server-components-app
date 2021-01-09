import React from 'react';
// import styles from "./categories.module.sass";
import Category from './Category.client';
import constants from '../../../constants/categorySchema';

const styles = {};


export default function Categories(props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>Categories</div>
      {(props.entities || [{ text: 'category' }]).map((category) => (
        <Category category={category} key={category[constants.ID]} />
      ))}
    </div>
  );
}
