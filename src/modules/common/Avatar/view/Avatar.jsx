import React from 'react';
import styles from './avatar.module.sass';

export default function Avatar(props) {
  const { getFirstLettersOfName, contact } = props;
  const style = {
    backgroundImage: `url(${contact.avatar})`,
  };
  return (
    <div className={props.styles.avatarWrap}>
      {contact.avatar ? (
        <div style={style} className={styles.avatar} />
      ) : (
        <p className={props.styles.letters}>{getFirstLettersOfName(contact)}</p>
      )}
    </div>
  );
}
