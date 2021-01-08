import React from "react";
import styles from "./avatar.module.sass";

export default function Avatar(props) {
  const { src, letter } = props;

  return (
    <div className={props.styles.avatarWrap}>
      {src ? (
        <img className={styles.avatar} src={src} alt={"avatar"} />
      ) : (
        <div className={props.styles.letters}>{letter}</div>
      )}
    </div>
  );
}
