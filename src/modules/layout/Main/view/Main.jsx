import React from 'react';
import styles from './main.module.sass';
import Header from '../../../main/Header';
import Grid from '../../../main/Grid';
import From from '../../../main/Form';

export default function Main(props) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.content}>
        <Grid />
        {/* <From /> */}
      </main>
    </div>
  );
}
