import React, { Fragment } from 'react';
// import styles from "./confirm.module.sass";
import { PopUpControls } from './../../popupControls';

const styles = {};

export default function Confirm(props) {
  console.log(props, 'Confirm');

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.message}>{props.message || 'not found'}</h3>
      <PopUpControls
        confirm={() => {
          props.action();
          props.closePopUp();
        }}
        closePopUp={props.closePopUp}
      />
    </div>
  );
}
