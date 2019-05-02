import React, { Fragment } from 'react';
// import styles from './form.module.sass';
import styles from './form.css';

export default function Contact(props) {
  return (
    <Fragment>
      <div className="add-contact__form-wrap">
        <div className="add-contact__form">
          <form className="add-form" method="POST" action="#" name="addContactForm">
            <div className="flex-1">
              <div className="foto-wrap">
                <div className="add-contact__foto-wrap">
                  <img
                    className="add-contact__foto"
                    src="../img/User.jpg"
                    alt="Your account photo"
                  />
                </div>
              </div>
              <div className="add-contact__fullname-wrap">
                <div className="flex-2">
                  <div className="input-name-inner">
                    <label className="field-add field-name">Name</label>
                    <input
                      className="input-add input-name"
                      type="text"
                      name="name"
                      required="required"
                    />
                  </div>
                  <div className="input-surname-inner">
                    <label className="field-add field-surname">Surname</label>
                    <input className="input-add input-surname" type="text" name="surname" />
                  </div>
                </div>
                <div className="input-descript-inner">
                  <label className="field-add field-descript">Description</label>
                  <textarea className="input-add input-descript" name="description" />
                </div>
              </div>
            </div>
            <div className="flex-3">
              <div className="input-mob-phone-inner input-inner">
                <label> Mobile phone</label>
                <input
                  className="input-add input-mob-phone"
                  type="phone"
                  name="mobilePhone"
                  required="required"
                />
              </div>
              <div className="input-phone-inner input-inner">
                <label>Phone</label>
                <input className="input-add input-phone" type="phone" name="phone" />
              </div>
              <div className="input-email-inner input-inner">
                <label>Email</label>
                <input className="input-add input-email" type="email" name="email" />
              </div>
              <div className="input-bday-inner input-inner">
                <label>Birthday</label>
                <input className="input-add input-bday" type="text" name="birthday" />
              </div>
              <div className="input-info-inner">
                <label>Informaition </label>
                <textarea className="input-add input-info" name="info" />
              </div>
              <div className="input-Insta-inner input-inner">
                <label>Instagram</label>
                <input className="input-add input-instg-acc" type="text" name="instAcc" />
              </div>
              <div className="input-fb-acc-inner input-inner">
                <label>Facebook</label>
                <input className="input-add input-fb-acc" type="text" name="fbAcc" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="save-controls-wrap">
        <div className="save-controls-inner">
          <div className="save-controls__btns">
            <button className="btn btn__save btn--theme-f">save </button>
            <button className="btn btn__cancel btn--theme-e">cancel</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
/*
 */
