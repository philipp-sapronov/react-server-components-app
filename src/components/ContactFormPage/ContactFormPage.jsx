import React from "react";
import Form from "./Form";
import Header from "../Header";
import styles from "./contact-form-page.module.sass";

export default () => {
  return (
    <>
      <Header />
      <div className={styles.inner}>
        <Form />
      </div>
    </>
  );
};
