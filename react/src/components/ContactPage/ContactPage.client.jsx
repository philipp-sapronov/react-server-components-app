import React from 'react';
// import styles from "./contactPage.module.sass";
import Avatar from '../Shared/Avatar/Avatar.client';
import Header from '../Header/Header.client';
import { useContact } from '../../hooks/contacts';
// import { useParams } from 'react-router';

const styles = {};

const avatarStyles = {
  avatarWrap: styles.avatarWrap,
  avatar: styles.avatar,
  letters: styles.letters,
};

function ContactPage() {
  // const { id } = useParams();
  const id = '123';
  const contact = useContact(id);

  if (!contact) return null;

  return (
    <div>
      <Header title={contact.firstname + ' ' + contact.lastname} />
      <div className={styles.inner}>
        <Avatar
          styles={avatarStyles}
          letter={contact.firstname.charAt(0)}
          src={contact.avatar}
        />
        <div className={styles.fieldWrap}>
          <div className={styles.label}>Name:</div>
          <div className={styles.value}>{contact.firstname}</div>
        </div>
        <div className={styles.fieldWrap}>
          <div className={styles.label}>Surname:</div>
          <div className={styles.value}>{contact.lastname}</div>
        </div>
        <div className={styles.fieldWrap}>
          <div className={styles.label}>Description:</div>
          <div className={styles.value}>{contact.description}</div>
        </div>
        <div className={styles.fieldWrap}>
          <div className={styles.label}>Phone:</div>
          <div className={styles.value}>{contact.phone}</div>
        </div>
        <div className={styles.fieldWrap}>
          <div className={styles.label}>Email:</div>
          <div className={styles.value}>{contact.email}</div>
        </div>
        <div className={styles.fieldWrap}>
          <div className={styles.label}>Birthday:</div>
          <div className={styles.value}>{contact.birthday.toDateString()}</div>
        </div>
        <div className={styles.fieldWrap}>
          <div className={styles.label}>Facebook:</div>
          <div className={styles.value}>{contact.facebook}</div>
        </div>
        <div className={styles.fieldWrap}>
          <div className={styles.label}>Instagram:</div>
          <div className={styles.value}>{contact.instagram}</div>
        </div>
        <div className={styles.fieldWrap}>
          <div className={styles.label}>Category:</div>
          <div className={styles.value}>{contact.category}</div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
