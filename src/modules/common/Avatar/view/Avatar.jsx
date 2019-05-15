import React from 'react';
import styles from './avatar.module.sass';

export default function Avatar(props) {
  const { getFirstLettersOfName, contact } = props;

  return (
    <div className={(props.styles && props.styles.avatarWrap) || styles.avatarWrap}>
      <p className={(props.styles && props.styles.avatar) || styles.avatar}>
        {getFirstLettersOfName(contact)}
      </p>
    </div>
  );
}
