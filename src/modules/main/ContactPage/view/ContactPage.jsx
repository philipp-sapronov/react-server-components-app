import React from 'react';
import styles from './contactPage.module.sass';
import DotsMenu from '../../../common/DotsMenu';
import Avatar from './../../../common/Avatar';

export default function ContactPage(props) {
  const { entity } = props;
  return (
    <div key={entity.ID}>
      <div className={styles.inner}>
        <div className={styles.fieldWrap}>
          <div className={styles.label}>Name:</div>
          <div className={styles.value}>{entity.name}</div>
        </div>
        <div className={styles.fieldWrap}>
          <div className={styles.label}>Surname:</div>
          <div className={styles.value}>{entity.surname}</div>
        </div>
        <div className={styles.fieldWrap}>
          <div className={styles.label}>Description:</div>
          <div className={styles.value}>{entity.description}</div>
        </div>
        <div className={styles.fieldWrap}>
          <div className={styles.label}>Phone:</div>
          <div className={styles.value}>{entity.phone}</div>
        </div>
        <div className={styles.fieldWrap}>
          <div className={styles.label}>Email:</div>
          <div className={styles.value}>{entity.email}</div>
        </div>
        <div className={styles.fieldWrap}>
          <div className={styles.label}>Birthday:</div>
          <div className={styles.value}>{entity.birthday}</div>
        </div>
        <div className={styles.fieldWrap}>
          <div className={styles.label}>Facebook:</div>
          <div className={styles.value}>{entity.facebook}</div>
        </div>
        <div className={styles.fieldWrap}>
          <div className={styles.label}>Instagram:</div>
          <div className={styles.value}>{entity.instagram}</div>
        </div>
        <div className={styles.fieldWrap}>
          <div className={styles.label}>Category:</div>
          <div className={styles.value}>{entity.category}</div>
        </div>

        <DotsMenu targetId={props.entity.id} targetDomain={props.targetDomain} />
      </div>
    </div>
  );
}
