import React from "react";
import styles from "./addContactBtn.module.sass";
import { ReactComponent as Icon } from "./images/add-btn.svg";
import { useHistory } from "react-router";

const AddContactBtn = () => {
  const history = useHistory();

  const handleCLick = () => {
    history.push(`/add-contact`);
  };

  return (
    <div className={styles.wrap}>
      <button onClick={handleCLick} className={styles.btn}>
        <div className={styles.iconWrap}>
          <Icon className={styles.icon} />
        </div>
        <p className={styles.text}>New contact</p>
      </button>
    </div>
  );
};

export default AddContactBtn;
