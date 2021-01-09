import React from 'react';
// import styles from './addContactBtn.module.sass';
import { useHistory } from 'react-router';

const styles = {};

const AddContactBtn = () => {
  const history = useHistory();

  const handleCLick = () => {
    history.push(`/add-contact`);
  };

  return (
    <div className={styles.wrap}>
      <button onClick={handleCLick} className={styles.btn}>
        <div className={styles.iconWrap}>
          <img src="/assets/add-btn.svg" alt="" />
        </div>
        <p className={styles.text}>New contact</p>
      </button>
    </div>
  );
};

export default AddContactBtn;
