import React from 'react';

export default function Avatar(props) {
  const { src, letter, classes = {} } = props;

  return (
    <div className={classes.wrapper || 'avatar__wrap'}>
      {src ? (
        <img className="avatar" src={src} alt={'avatar'} />
      ) : (
        <div className={classes.letters}>{letter}</div>
      )}
    </div>
  );
}
