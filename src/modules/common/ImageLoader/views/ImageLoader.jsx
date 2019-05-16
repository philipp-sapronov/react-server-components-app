import React from 'react';
import styles from './imageLoader.module.sass';
import { ReactComponent as ImageIcon } from './images/frame-landscape.svg';
import { ReactComponent as InputIcon } from './images/add-image.svg';

const acceptedExts = ['image/x-png', 'image/jpeg'];

export default function ImageLoader(props) {
  const style = {
    backgroundImage: `url(${props.avatar})`,
  };

  return (
    <div className={styles.wrap}>
      {props.avatar ? (
        <div className={styles.avatar} style={style} />
      ) : (
        <ImageIcon className={styles.icon} />
      )}
      <InputIcon className={styles.inputIcon} />
      <label className={styles.label} htmlFor="fileInput" />
      <input
        ref={props.inpuRef}
        className={styles.input}
        id="fileInput"
        type="file"
        name="avatar"
        accept={[...acceptedExts]}
      />
    </div>
  );
}
