import React from 'react';
// import styles from './PopUpContainer.module.sass';
const styles = {};

export default function WithPopUpContainer(Wrapped) {
  return function PopUpContainer(props) {
    console.log(props, 'PopUpContainer Wrapper View');
    if (!props.isVisible) return null;
    return (
      <React.Fragment>
        <div className={styles.overlay} onClick={props.closePopUp} />
        <div className={styles.container} onClick={props.stopPropagation}>
          <div className={styles.inner}>
            <div className={styles.topLine}>
              <span className={styles.heading} />
              <button className={styles.closeBtn} onClick={props.closePopUp}>
                +
              </button>
            </div>
            <Wrapped {...props} />
          </div>
        </div>
      </React.Fragment>
    );
  };
}
