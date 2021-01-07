import React from "react";
import styles from "./main.module.sass";



export const Main = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <main>{children}</main>
    </div>
  );
};
