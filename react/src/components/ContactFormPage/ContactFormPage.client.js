import React, { useEffect } from 'react';
import Form from './Form/Form.client';
import Header from '../Header/Header.client';
// import styles from "./contact-form-page.module.sass";

const styles = {};

export default () => {
  useEffect(() => {
    console.log('hallo world');
  }, []);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.inner}>{<Form />}</div>
      </div>
    </>
  );
};
