import React from 'react';
import styles from './main.module.sass';
import Header from '../../../main/Header';
import Form from '../../../main/Form';
import ContactPage from '../../../main/ContactPage';
import Contacts from '../../../main/Contacts/Contacts';
import scrollStyles from './scrollbar.module.sass';

export default function Main(props) {
  const { scrollThumb, scrollBar, scrollContainer } = props;

  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <div className={scrollStyles.wrap} ref={scrollBar.ref}>
          <div
            className={scrollStyles.bar}
            ref={scrollThumb.ref}
            onMouseDown={scrollThumb.onMouseDown}
          />
        </div>
        <div
          className={styles.container}
          ref={scrollContainer.ref}
          onScroll={scrollContainer.onScroll}
        >
          <div className={styles.inner}>
            <ContactPage />
            <Contacts />
            <Form />
          </div>
        </div>
      </main>
    </div>
  );
}
