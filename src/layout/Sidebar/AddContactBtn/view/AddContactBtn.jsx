import React from "react";
import styles from "./addContactBtn.module.sass";
import { ReactComponent as Icon } from "./images/add-btn.svg";
import { useHistory } from "react-router";
import { hashFn } from "../../../../helpers/hashFunctions";

const AddContactBtn = (props) => {
  const { setAddingContactId } = props;
  const history = useHistory();

  const clickHandler = () => {
    const generatedId = hashFn().toString();
    setAddingContactId({ id: generatedId });
    history.push(`/contact_add/${generatedId}`);
  };

  return (
    <div className={styles.wrap}>
      <button onClick={clickHandler} className={styles.btn}>
        <div className={styles.iconWrap}>
          <Icon className={styles.icon} />
        </div>
        <p className={styles.text}>New contact</p>
      </button>
    </div>
  );
};

export default AddContactBtn;
