import React, { Fragment } from 'react';
// import styles from './popupControls.module.sass';

export default function PopUpControls(props) {
  console.log(props, 'Confirm');

  // if (!props.mesaage || !props.action) props.closePopUp();

  return (
    <div className={styles.controls}>
      <button
        disabled={props.disabled}
        className={styles.confirmBtn}
        onClick={props.confirm}>
        Ok
      </button>
      <button className={styles.cancelBtn} onClick={props.closePopUp}>
        Cancel
      </button>
    </div>
  );
}
