import React from 'react';
import styles from './imageLoader.module.sass';

const acceptedExts = ['image/x-png', 'image/jpeg'];

export default function ImageLoader(props) {
  const style = {
    backgroundImage: `url('data:image/jpg;base64,${props.avatar}')`,
  };

  return (
    <div className={styles.wrap}>
      {props.avatar ? (
        <div className={styles.avatar} style={style} />
      ) : (
        <img className={styles.icon} src={'/assets/frame-landscape.svg'} />
      )}
      <img className={styles.inputIcon} src={'/assets/add-image.svg'} />
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
